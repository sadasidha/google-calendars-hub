// --- binding registry ---
    const bindings = new Map()

    // --- create reactive state ---
    function createReactiveState(initial) {
      return new Proxy(initial, {
        set(target, prop, value) {
          target[prop] = value

          // update all bound inputs
          if (bindings.has(prop)) {
            bindings.get(prop).forEach(el => {
              if (el.value !== value) {
                el.value = value
              }
            })
          }

          return true
        }
      })
    }

    // --- auto-bind all inputs with data-bind ---
    function autoBind(state) {
      const inputs = document.querySelectorAll("input[data-bind]")

      inputs.forEach(input => {
        const key = input.dataset.bind

        // register element
        if (!bindings.has(key)) {
          bindings.set(key, new Set())
        }
        bindings.get(key).add(input)

        // DOM → state
        input.addEventListener("input", e => {
          state[key] = e.target.value
        })

        // initial sync
        if (state[key] !== undefined) {
          input.value = state[key]
        }
      })
    }
    autoBind(state)

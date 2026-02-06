# Google Calendars Hub

**Effective Date:** February 6, 2026

---

## Overview

**Google Calendars Hub** is a free, desktop application built with **Rust**, **Tauri**. It allows users to securely access and manage their Google Calendar accounts — both personal and company/workspace calendars — directly from their desktop.  

The app is fully **client-side**: all calendar data and access tokens are stored locally. No passwords are collected, and the app does not share your calendar data with any third parties.

---

## Features

- Add multiple Google accounts (personal or company)  
- Access calendars in read-only or read/write mode (depending on OAuth scopes)  
- Local storage of access and refresh tokens for persistent login  
- Secure token storage using the OS keychain or local encrypted database  
- Fully Vanilla JS frontend with Tauri backend  
- Cross-platform support: Windows, macOS, Linux  
- Open-source, free-to-use  

---

## Installation

### Prerequisites

- **Rust & Cargo**: [Install Rust](https://www.rust-lang.org/tools/install)  
- **Tauri CLI**: `cargo install tauri-cli`  
- **System dependencies**:
  - macOS: Xcode CLI tools  
  - Windows: Visual Studio (Desktop development)  
  - Linux: `libwebkit2gtk-4.0-dev`

### Build from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/google-calendars-hub.git
   cd google-calendars-hub
```
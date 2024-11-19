# math-goes-here
Math curriculum for video game developers


# Installation Guide:


## Prerequisites

### Install Node.js and npm (npm is included in Node.js)


1. **Download Node.js**:
   - Go to the [Node.js official website]([https://nodejs.org/](https://nodejs.org/en/download/prebuilt-installer)).
   - Download the **LTS** version for stability.

2. **Install Node.js**:
   - **Windows**:
     - Run the downloaded `.msi` installer.
     - Follow the installation steps, ensuring the option to add Node.js to the system PATH is selected.
   - **macOS**:
     - Run the downloaded `.pkg` installer and follow the instructions.

3. **Verify Installation**:
   After installation, open a terminal and run:
   ```bash
   node -v
   npm -v
   ```
   This will display the installed versions of Node.js and npm.

4. **Set Environment Variables** (Usually, the Node.js installer handles this automatically. If issues arise):
   - **Windows**:
     - Open "System Properties" (Start Menu → Search → Advanced System Settings → Environment Variables).
     - Ensure the path to Node.js is in the `PATH` variable under "System Variables."
     - Add the following to `PATH` if missing: (This should be the default path, but it depends on the path you selected during the installation )
       ```plaintext
       C:\Users\<YourUser>\AppData\Roaming\npm
       ```
   - **macOS**:
     - The Node.js installer automatically sets up the environment.
     - To verify, run:
       ```bash
       echo $PATH
       ```
       Ensure `/usr/local/bin` is included in the output.

**Guide for Windows:** https://www.youtube.com/watch?v=OCABH4Y7jtM

**Guide for Mac:** [https://www.youtube.com/watch?v=OCABH4Y7jtM](https://www.youtube.com/watch?v=U5Si1TCdT4U)



## Run In Development Environment

### 1. Install Dependencies
Install the required dependencies using npm:
```bash
# Using npm, in the root directory of this project, where this file is located
npm install
```

### 2. Start the Development Server
Start the React development server:
```bash
# Using npm, in the root directory of this project, where this file is located
npm run dev
```

This will launch the app in your default browser at `http://localhost:xxxx/`.

## Deploy The Build
```bash
# Using npm, in the root directory of this project, where this file is located
# This has not yet set up.
npm run deploy
```

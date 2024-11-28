# Search Flight





## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ucakyunus/search-flights.git
    ```
2. Install project dependencies:
    ```bash
    npm install
    ```
   or
    ```bash
    yarn
    ```

### Running the App

#### Create a `.env` file in the root directory like the `.env.example` file and add the following environment variables:
 ```bash
    VITE_CLIENT_PORT=7373
    VITE_SERVER_PORT=7374
 ```

#### Client and Server Together
3. Launch the app:
    ```bash
    npm run dev
    ```
   or
    ```bash
    yarn dev
    ```

   The **client** will be available at [http://localhost:7373](http://localhost:7373) and the **server** at [http://localhost:7374](http://localhost:7374).

#### Running Client Separately
4. Launch the client:
    ```bash
    npm run client
    ```
   or
    ```bash
    yarn client
    ```

   The client will be available at [http://localhost:7373](http://localhost:7373).


5. Launch the server:
    ```bash
    npm run server
    ```
   or
    ```bash
    yarn server
    ```

   The server will be available at [http://localhost:7374](http://localhost:7374).

### Running the Tests
6. Run the tests:
    ```bash
    npm run test
    ```
   or
    ```bash
    yarn test
    ```

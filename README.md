### TEST REACT (SC Test). Using React, build an app

### Create .env.local
NEXT_PUBLIC_BASE_URL=https://api.nasa.gov/mars-photos/api/v1/rovers
NEXT_PUBLIC_API_KEY=

### Install dependencies
```npm install```
### Execute project
```npm run dev```
### Context
``` Connects to the NASA API (NASA Open APIs) Obtains photos from the 'Mars Rover' endpoint ```

### 1
``` 1. Allows the user to see the photos of each rover (Curiosity, Opportunity and Spirit) ```

### 2
``` 2. The photos list should be paginated showing a max of 25 photos per page ```

### 3
``` 3. (dynamic loading similar to facebook/instagram will be nice, but not required) ```

### 4
``` 4. Allows the user to filter the rover photos by camera. ```

### 5 By default it shows the latest photos for current day.
``` 5. Allows the user to search for photos based on 'Earth Day' date (2020-09-22) ```
``` 5. Allows the user to search for photos based on the 'Sol' date (2890) ```

### 6 Optional:
``` 6. Let the user store search parameters as favorites or bookmarks that can be recalled in the future (Local storage is accepted any serverless way of storing data is also accepted) ```

### 7 Optional:
``` 7. A lot of extra points if you include a few tests. ```

# Api's we could use

I have created three api's -- edit, 5 in total now

1. weather data based on citycode

   reachable under `/getWeatherData/:citycode`

    sample of response

   ```json
   airport: {
       country_code: "ES"
       iata_code: "VLC"
       icao_code: "LEVC"
       lat: 39.49
       lng: -0.48
       name: "Valencia Airport"
   }
   ```

2. airport data based on citycode

    reachable under `/getDestinationData/:citycode`

    sample of response

   ```json
    weather: {
        current: {
            cloud: 0
            feelslike_c: 21
            feelslike_f: 69.8
            gust_kph: 38.5
            gust_mph: 23.9
            humidity: 43
            is_day: 0
            last_updated: "2022-04-07 21:45"
            last_updated_epoch: 1649360700
            precip_in: 0
            precip_mm: 0
            pressure_in: 29.97
            pressure_mb: 1015
            temp_c: 21
            temp_f: 69.8
            uv: 5
            vis_km: 10
            vis_miles: 6
            wind_degree: 270
            wind_dir: "W"
            wind_kph: 25.9
            wind_mph: 16.1
        }
        location: {
            country: "Spain"
            lat: 39.49
            localtime: "2022-04-07 22:01"
            localtime_epoch: 1649361718
            lon: -0.48
            name: "Valencia Airport"
            region: "Valencia"
            tz_id: "Europe/Madrid"
        }
    }
    ```

3. weather and airport data based on citycode

     reachable under `/getAlldata/:citycode`

    sample of response

    ```json
    {
        airport: {
            country_code: "ES"
            iata_code: "VLC"
            icao_code: "LEVC"
            lat: 39.49
            lng: -0.48
            name: "Valencia Airport"
        },
        weather: {
            current: {
                cloud: 0
                feelslike_c: 21
                feelslike_f: 69.8
                gust_kph: 38.5
                gust_mph: 23.9
                humidity: 43
                is_day: 0
                last_updated: "2022-04-07 21:45"
                last_updated_epoch: 1649360700
                precip_in: 0
                precip_mm: 0
                pressure_in: 29.97
                pressure_mb: 1015
                temp_c: 21
                temp_f: 69.8
                uv: 5
                vis_km: 10
                vis_miles: 6
                wind_degree: 270
                wind_dir: "W"
                wind_kph: 25.9
                wind_mph: 16.1
            }
            location: {
                country: "Spain"
                lat: 39.49
                localtime: "2022-04-07 22:01"
                localtime_epoch: 1649361718
                lon: -0.48
                name: "Valencia Airport"
                region: "Valencia"
                tz_id: "Europe/Madrid"
            }
        }
    }
   ```

   4. Fake store API for luxury items (jewelry), shopping items.

    fetch file

    ```json
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
   ```

   example of product in specific category

    ```json
     [
            {
                id:07,
                title:'cartier bracelet',
                price:'13.000',
                category:'jewelery',
                description:'beautiful etc etc',
                image:'...'
            }
            {
                id:8,
                title:'cartier necklace',
                price:'15.000',
                category:'jewelery',
                description:'also beautiful',
                image:'...'
            }
        ]

5. Fake store API for all products

fetch file

```json
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
```

example of output of all products

```json
            [
                {
                    id:1,
                    title:'heineken',
                    price:'3,50',
                    category:'drinks',
                    description:'alcohol 5%',
                    image:'...'
                },
                /*other category or product*/
                {
                    id:30,
                    title:'lay's chips',
                    price:'5,20',
                    category:'food/snacks',
                    description:'200 gr',
                    image:'...'
                }
            ]
```

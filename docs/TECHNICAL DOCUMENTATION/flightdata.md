API FLight Data

Source [Flightlabs](https://www.goflightlabs.com/)

API Key

```bash
API access key: 
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTVmZTE1ZjEzOTU4ZjZjNGJjMmYzMzMxMzI1ZjNlYjM5MGE1ZjQwZDA4ZmNlY2FiZWE2MDFjYWM2MDU0YzA0ZmZiNDlkZmI4N2Y0ZWUxMTIiLCJpYXQiOjE2NDk0MTc1ODIsIm5iZiI6MTY0OTQxNzU4MiwiZXhwIjoxNjgwOTUzNTgyLCJzdWIiOiIyMzI0Iiwic2NvcGVzIjpbXX0.rbnBOH7oA1LX6qXeik3kzUj1WgPATJKEGfO9sCvfr9TqGLqSihq93jK-rmiLNGGcbOLvSct8upaCSPDa3yIXBQ
```

Get flight info

```js
fetch('https://cors-anywhere.herokuapp.com/https://app.goflightlabs.com/flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTVmZTE1ZjEzOTU4ZjZjNGJjMmYzMzMxMzI1ZjNlYjM5MGE1ZjQwZDA4ZmNlY2FiZWE2MDFjYWM2MDU0YzA0ZmZiNDlkZmI4N2Y0ZWUxMTIiLCJpYXQiOjE2NDk0MTc1ODIsIm5iZiI6MTY0OTQxNzU4MiwiZXhwIjoxNjgwOTUzNTgyLCJzdWIiOiIyMzI0Iiwic2NvcGVzIjpbXX0.rbnBOH7oA1LX6qXeik3kzUj1WgPATJKEGfO9sCvfr9TqGLqSihq93jK-rmiLNGGcbOLvSct8upaCSPDa3yIXBQ&flight_status=active')
.then(res=>res.json())
.then(json=>console.log(json))
```

```json
[
    {
        "flight_date": "2022-04-08",
        "flight_status": "active",
        "departure": {
            "airport": "Sultan Aji Muhamad Sulaiman Airport\r\n",
            "timezone": null,
            "iata": "BPN",
            "icao": "WALL",
            "terminal": null,
            "gate": "D",
            "delay": 13,
            "scheduled": "2022-04-08T16:00:00+00:00",
            "estimated": "2022-04-08T16:00:00+00:00",
            "actual": "2022-04-08T16:12:00+00:00",
            "estimated_runway": "2022-04-08T16:12:00+00:00",
            "actual_runway": "2022-04-08T16:12:00+00:00"
        },
        "arrival": {
            "airport": "Kalimaru",
            "timezone": "Asia/Makassar",
            "iata": "BEJ",
            "icao": "WAQT",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2022-04-08T17:20:00+00:00",
            "estimated": "2022-04-08T17:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Wings Air (Indonesia)",
            "iata": "IW",
            "icao": "WON"
        },
        "flight": {
            "number": "2362",
            "iata": "IW2362",
            "icao": "WON2362",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    }
]
```

Get Flight Routes

```js
fetch('https://cors-anywhere.herokuapp.com/https://app.goflightlabs.com/flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTVmZTE1ZjEzOTU4ZjZjNGJjMmYzMzMxMzI1ZjNlYjM5MGE1ZjQwZDA4ZmNlY2FiZWE2MDFjYWM2MDU0YzA0ZmZiNDlkZmI4N2Y0ZWUxMTIiLCJpYXQiOjE2NDk0MTc1ODIsIm5iZiI6MTY0OTQxNzU4MiwiZXhwIjoxNjgwOTUzNTgyLCJzdWIiOiIyMzI0Iiwic2NvcGVzIjpbXX0.rbnBOH7oA1LX6qXeik3kzUj1WgPATJKEGfO9sCvfr9TqGLqSihq93jK-rmiLNGGcbOLvSct8upaCSPDa3yIXBQ&flight_status=active')
    .then(res=>res.json())
    .then(json=>console.log(json))
```

```json
[
    {
        "departure": {
            "airport": "Franz Josef Strauss",
            "timezone": "Europe/Berlin",
            "iata": "MUC",
            "icao": "EDDM",
            "terminal": "2",
            "time": "11:10:00"
        },
        "arrival": {
            "airport": "Sarajevo",
            "timezone": "Europe/Sarajevo",
            "iata": "SJJ",
            "icao": "LQSA",
            "terminal": null,
            "time": "12:30:00"
        },
        "airline": {
            "name": "AIR DOLOMITI S.p.A. LINEE AEREE REGIONALI EUROPEE",
            "callsign": "DOLOMITI",
            "iata": "EN",
            "icao": "DLA"
        },
        "flight": {
            "number": "1730"
        }
    },
    {
        "departure": {
            "airport": "Franz Josef Strauss",
            "timezone": "Europe/Berlin",
            "iata": "MUC",
            "icao": "EDDM",
            "terminal": "2",
            "time": "08:55:00"
        },
        "arrival": {
            "airport": "Lamezia Terme",
            "timezone": "Europe/Rome",
            "iata": "SUF",
            "icao": "LICA",
            "terminal": null,
            "time": "10:55:00"
        },
        "airline": {
            "name": "AIR DOLOMITI S.p.A. LINEE AEREE REGIONALI EUROPEE",
            "callsign": "DOLOMITI",
            "iata": "EN",
            "icao": "DLA"
        },
        "flight": {
            "number": "1962"
        }
    }
]
```

Get Aircraft Type

```js
fetch('https://cors-anywhere.herokuapp.com/https://app.goflightlabs.com/aircraft_types?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTVmZTE1ZjEzOTU4ZjZjNGJjMmYzMzMxMzI1ZjNlYjM5MGE1ZjQwZDA4ZmNlY2FiZWE2MDFjYWM2MDU0YzA0ZmZiNDlkZmI4N2Y0ZWUxMTIiLCJpYXQiOjE2NDk0MTc1ODIsIm5iZiI6MTY0OTQxNzU4MiwiZXhwIjoxNjgwOTUzNTgyLCJzdWIiOiIyMzI0Iiwic2NvcGVzIjpbXX0.rbnBOH7oA1LX6qXeik3kzUj1WgPATJKEGfO9sCvfr9TqGLqSihq93jK-rmiLNGGcbOLvSct8upaCSPDa3yIXBQ')
        .then(res=>res.json())
        .then(json=>console.log(json))
```

```json
[
    {
        "id": "1",
        "iata_code": "100",
        "aircraft_name": "Fokker 100",
        "plane_type_id": "1"
    },
    {
        "id": "2",
        "iata_code": "141",
        "aircraft_name": "British Aerospace BAe 146-100",
        "plane_type_id": "2"
    },
    {
        "id": "3",
        "iata_code": "142",
        "aircraft_name": "British Aerospace BAe 146-200",
        "plane_type_id": "3"
    }
]
```

Get Taxes

```js
fetch('https://cors-anywhere.herokuapp.com/https://app.goflightlabs.com/taxes?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTVmZTE1ZjEzOTU4ZjZjNGJjMmYzMzMxMzI1ZjNlYjM5MGE1ZjQwZDA4ZmNlY2FiZWE2MDFjYWM2MDU0YzA0ZmZiNDlkZmI4N2Y0ZWUxMTIiLCJpYXQiOjE2NDk0MTc1ODIsIm5iZiI6MTY0OTQxNzU4MiwiZXhwIjoxNjgwOTUzNTgyLCJzdWIiOiIyMzI0Iiwic2NvcGVzIjpbXX0.rbnBOH7oA1LX6qXeik3kzUj1WgPATJKEGfO9sCvfr9TqGLqSihq93jK-rmiLNGGcbOLvSct8upaCSPDa3yIXBQ')
        .then(res=>res.json())
        .then(json=>console.log(json))
```

```json
[
    {
        "id": "1",
        "tax_id": "1",
        "tax_name": "Government Tax",
        "iata_code": "AB"
    },
    {
        "id": "2",
        "tax_id": "2",
        "tax_name": "Value Added Tax",
        "iata_code": "AC"
    },
    {
        "id": "3",
        "tax_id": "3",
        "tax_name": "Passenger Service Charge (International)",
        "iata_code": "AE"
    }
]
```

Get Airlines

```js
fetch('https://cors-anywhere.herokuapp.com/https://app.goflightlabs.com/airlines?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTVmZTE1ZjEzOTU4ZjZjNGJjMmYzMzMxMzI1ZjNlYjM5MGE1ZjQwZDA4ZmNlY2FiZWE2MDFjYWM2MDU0YzA0ZmZiNDlkZmI4N2Y0ZWUxMTIiLCJpYXQiOjE2NDk0MTc1ODIsIm5iZiI6MTY0OTQxNzU4MiwiZXhwIjoxNjgwOTUzNTgyLCJzdWIiOiIyMzI0Iiwic2NvcGVzIjpbXX0.rbnBOH7oA1LX6qXeik3kzUj1WgPATJKEGfO9sCvfr9TqGLqSihq93jK-rmiLNGGcbOLvSct8upaCSPDa3yIXBQ')
        .then(res=>res.json())
        .then(json=>console.log(json))
```

```json
[
    {
        "id": "1",
        "fleet_average_age": "10.9",
        "airline_id": "1",
        "callsign": "AMERICAN",
        "hub_code": "DFW",
        "iata_code": "AA",
        "icao_code": "AAL",
        "country_iso2": "US",
        "date_founded": "1934",
        "iata_prefix_accounting": "1",
        "airline_name": "American Airlines",
        "country_name": "United States",
        "fleet_size": "963",
        "status": "active",
        "type": "scheduled"
    },
    {
        "id": "2",
        "fleet_average_age": "17",
        "airline_id": "2",
        "callsign": "DELTA",
        "hub_code": "ATL",
        "iata_code": "DL",
        "icao_code": "DAL",
        "country_iso2": "US",
        "date_founded": "1928",
        "iata_prefix_accounting": "6",
        "airline_name": "Delta Air Lines",
        "country_name": "United States",
        "fleet_size": "823",
        "status": "active",
        "type": "scheduled,division"
    },
    {
        "id": "3",
        "fleet_average_age": "13.8",
        "airline_id": "3",
        "callsign": "UNITED",
        "hub_code": "ORD",
        "iata_code": "UA",
        "icao_code": "UAL",
        "country_iso2": "US",
        "date_founded": "1931",
        "iata_prefix_accounting": "16",
        "airline_name": "United Airlines",
        "country_name": "United States",
        "fleet_size": "715",
        "status": "active",
        "type": "scheduled,division"
    }
]
```

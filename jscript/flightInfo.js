let currentSet = 0;
        let currentEntry = 0;
        let flightData = [];
        let xhr = new XMLHttpRequest();

        // Function to fetch flight data
        function fetchFlightData() {
            xhr.open("GET", "flights.json", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    flightData = JSON.parse(xhr.responseText);
                    displayFlightSet();
                }
            };
            xhr.send();
        }

        // Function to display a set of 5 flight data entries in 3 tables
        function displayFlightSet() {
            let flightInfo = '';
            let tableCount = 3;

            for (let t = 0; t < tableCount; t++) {
                flightInfo += '<table>';
                flightInfo += '<tr>';
                flightInfo += '<th>AIRLINE</th>';
                flightInfo += '<th>FLIGHT NO</th>';
                flightInfo += '<th>DEPARTURE</th>';
                flightInfo += '<th>DESTINATION</th>';
                flightInfo += '<th>ETA</th>';
                flightInfo += '<th>ATA</th>';
                flightInfo += '<th>STATUS</th>';
                flightInfo += '<th style="background-color:#1d5f66"></th>';
                flightInfo += '</tr>';

                for (let i = 0; i < 7; i++) {
                    let entryIndex = currentEntry + i;
                    if (entryIndex < flightData.length) {
                        let flight = flightData[entryIndex];
                        flightInfo += '<tr>';
                        flightInfo += '<td><img  src="' + flight.image_url + '"</td>';
                        flightInfo += '<td>' + flight.flight_number + '</td>';
                        flightInfo += '<td>' + flight.departure + '</td>';
                        flightInfo += '<td>' + flight.destination + '</td>';
                        flightInfo += '<td>' + flight.departure_time + '</td>';
                        flightInfo += '<td>' + flight.arrival_time + '</td>';
                        flightInfo += '<td>' + flight.status + '</td>';
                        flightInfo += '<td style="background-color: #1d5f66 "></td>';
                        flightInfo += '</tr>';
                    }
                }

                flightInfo += '</table>';

                currentEntry += 7;
                if (currentEntry >= flightData.length) {
                    currentEntry = 0;
                }
            }

            document.getElementById('flightInfo').innerHTML = flightInfo;

            setTimeout(displayFlightSet, 5000); // Change every 5 seconds
        }

        // Start fetching and displaying flight data
        fetchFlightData();
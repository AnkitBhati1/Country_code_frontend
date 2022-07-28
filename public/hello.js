function getData() {
    fetch("https://httpbin.org/ip")
        .then(response => response.json())
        .then(data => {
            const ip_api_url = "https://ipapi.co/" + data.origin + "/json/"
            fetch(ip_api_url)
                .then(response => response.json())
                .then(data => {
                    fetch('/api/hello', {
                        method: 'POST',
                        body: JSON.stringify(data)
                    })
                })
        })
}
// call the function to make api call
getData()
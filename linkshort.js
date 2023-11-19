function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;

    // Perform URL shortening logic (you may use a service or generate a short link)

    // For this example, let's just add a prefix to the original URL
    const shortenedUrl = "https://short.link/" + Math.random().toString(36).substring(7);

    document.getElementById('shortenedUrl').innerText = `Shortened URL: ${shortenedUrl}`;
}

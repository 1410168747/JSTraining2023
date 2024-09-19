document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the access token and file input from the form
    var accessToken = document.getElementById('accessToken').value;
    var fileInput = document.getElementById('fileInput').files[0];

    if (!accessToken || !fileInput) {
        document.getElementById('status').innerText = "Access token and file are required.";
        return;
    }

    // Read the file data
    var reader = new FileReader();
    reader.onload = function (e) {
        uploadFile(accessToken, fileInput.name, e.target.result);
    };
    reader.readAsArrayBuffer(fileInput);
});

function uploadFile(accessToken, fileName, fileData) {
    var xhr = new XMLHttpRequest();
    var url = "https://graph.microsoft.com/v1.0/me/drive/root:/" + encodeURIComponent(fileName) + ":/content";

    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
    xhr.setRequestHeader("Content-Type", "application/octet-stream");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            document.getElementById('status').innerText = "File uploaded successfully!";
        } else if (xhr.readyState === 4) {
            document.getElementById('status').innerText = "Upload failed: " + xhr.responseText;
        }
    };

    xhr.send(fileData);
}
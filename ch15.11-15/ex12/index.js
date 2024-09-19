document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the access token and file input from the form
    let accessToken = document.getElementById('accessToken').value;
    let fileInput = document.getElementById('fileInput').files[0];

    if (accessToken === null || accessToken === undefined) {
        alert("Access token is required.");
        return;
    }

    if (fileInput === null || fileInput === undefined) {
        alert("Input file is required.");
        return;
    }

    document.getElementById('upload').disabled = true;

    // Read the file data
    let reader = new FileReader();
    reader.onload = function (e) {
        uploadFile(accessToken, fileInput.name, e.target.result);
    };
    reader.readAsArrayBuffer(fileInput);
});

async function uploadFile(accessToken, fileName, fileData) {
    const options = {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/octet-stream",
        },
        body: fileData,
    }
    const url = "https://graph.microsoft.com/v1.0/me/drive/root:/" + encodeURIComponent(fileName) + ":/content";
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            document.getElementById('status').innerText = "File uploaded successfully!";
            return
        } else {
            const errorResponse = await response.json();
            throw new Error(`Response: ${response}`);
        }
    } catch (error) {
        // fetchが失敗した場合
        // fetchが成功したがステータスコードが200番台以外の場合
        // onSuccessがエラーを返した場合
        alert(error.message);
    } finally {
        // Re-enable the button
        document.getElementById('uploadButton').disabled = false;
    }
}
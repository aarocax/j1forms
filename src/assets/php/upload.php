<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $targetDir = "../uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetPath = $targetDir . $fileName;

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath)) {
        $fileUrl = $_SERVER["HTTP_HOST"] . "/" . $targetPath;
    }
}
?>
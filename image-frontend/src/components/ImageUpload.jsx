import { useState } from "react";
import { uploadImage } from "../api/imageApi";

const ImageUpload = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Please select an image.");
            return;
        }
        setLoading(true);
        setError("");

        const formData = new FormData();
        formData.append("image", file);

        try {
            const result = await uploadImage(formData);
            onUploadSuccess(result.imageUrl);
        } catch (err) {
            setError("Upload failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Uploading..." : "Upload"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default ImageUpload;

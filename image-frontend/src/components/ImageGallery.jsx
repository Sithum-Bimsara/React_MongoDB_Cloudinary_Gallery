import { useEffect, useState } from "react";
import { getImages } from "../api/imageApi"; // API call to fetch images
import "./ImageGallery.css"; // Import CSS styles

const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await getImages(); // Fetch images from backend
                setImages(data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Uploaded Images</h2>
            <div className="image-grid">
                {images.map((image) => (
                    <div className="image-card" key={image._id}>
                        <img className="image" src={image.imageUrl} alt="Uploaded" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;

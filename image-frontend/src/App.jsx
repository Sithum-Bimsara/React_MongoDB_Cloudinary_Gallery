import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";

function App() {
    const [refresh, setRefresh] = useState(false);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Image Upload App</h1>
            <ImageUpload onUploadSuccess={() => setRefresh(!refresh)} />
            <ImageGallery key={refresh} />
        </div>
    );
}

export default App;

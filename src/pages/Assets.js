import React, { useState, useEffect } from "react";

export default function Assets() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    try {
      const getPhotos = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setPhotos(data.slice(0, 20));
        console.log(data.slice(0, 20));
      };
      getPhotos();
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <section className="max-width">
        {isLoading ? (
          <h2 className="text-3xl text-slate-800 drop-shadow-lg mb-8 font-bold">
            Loading...
          </h2>
        ) : (
          <>
            <h1 className="text-3xl text-slate-800 drop-shadow-lg mb-8 font-bold">
              Assets
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo) => (
                <article
                  key={photo.id}
                  className="bg-white p-4 rounded shadow-lg"
                >
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}

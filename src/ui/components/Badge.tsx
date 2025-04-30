import Script from "next/script";

export default function Badge() {
    return (
        <div className="flex flex-wrap justify-center items-center my-4 gap-4">
            <div
                className="rounded-xl bg-lineal p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
                <div
                    data-iframe-width="200"
                    data-iframe-height="250"
                    data-share-badge-id="320d753b-6621-4083-863a-4967430e7aef"
                    data-share-badge-host="https://www.credly.com"
                ></div>
            </div>
            <div
                className="rounded-xl bg-lineal p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
                <div data-iframe-width="200" data-iframe-height="250" data-share-badge-id="bb28e22a-5f36-4ce6-bd30-1c089897c6f9" data-share-badge-host="https://www.credly.com"></div>
            </div>

            <div
                className="rounded-xl bg-lineal p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
                <div data-iframe-width="200" data-iframe-height="250" data-share-badge-id="25c3b1c0-f3e3-45fd-87fc-dc899d952b13" data-share-badge-host="https://www.credly.com"></div>
            </div>

            <div
                className="rounded-xl bg-lineal p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
                <div data-iframe-width="200" data-iframe-height="250" data-share-badge-id="dbf4a20f-95a3-48c0-98f9-d820c2317135" data-share-badge-host="https://www.credly.com"></div>
            </div>
            <Script
                src="https://cdn.credly.com/assets/utilities/embed.js"
                strategy="lazyOnload"
            />
        </div >
    );
}

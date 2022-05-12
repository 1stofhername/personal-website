export default function Video ({ videoLink }) {
    return (
        <div className="video">
            <iframe
            src={videoLink}
            className="project-image"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
        />{" "}
        </div>
    )
}
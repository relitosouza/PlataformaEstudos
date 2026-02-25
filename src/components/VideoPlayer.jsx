export default function VideoPlayer({ url }) {
  if (!url) return null

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-2">🎥 Vídeo</h3>
      <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
        <iframe
          src={url}
          title="Vídeo da aula"
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  )
}

export default function Hearts({ hearts, maxHearts, size = 'md' }) {
  const textSize = size === 'sm' ? 'text-sm' : 'text-lg'

  return (
    <div className={`flex items-center gap-0.5 ${textSize}`} aria-label={`${hearts} vies sur ${maxHearts}`}>
      {Array.from({ length: maxHearts }, (_, i) => (
        <span key={i}>{i < hearts ? '❤️' : '🤍'}</span>
      ))}
    </div>
  )
}

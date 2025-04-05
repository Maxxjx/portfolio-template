import Image from 'next/image';

export const Profile = () => {
  return (
    <div className="profile">
      <Image
        src="/profile.jpg"
        alt="Profile picture"
        width={200}
        height={200}
        loading="lazy"
      />
      <div className="profile-content" style={{ willChange: 'transform' }}>
        <h1>John Doe</h1>
        <p>Software Engineer</p>
        <p>Passionate about building scalable web applications and working with modern web technologies.</p>
      </div>
    </div>
  );
};
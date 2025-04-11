import React from "react";
import { useRouter } from "next/router";
import styles from "../css-component/profile.module.css";
import { useState } from "react";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleGoToLogin = () => {
    // 로그인 페이지로 이동
    router.push("/login");
  };

  const handleImageClick = (imageId: number) => {
    const clickedImage = posts.find((post) => post.id === imageId)?.image;
    if (clickedImage) {
      setSelectedImage(clickedImage); // 클릭한 이미지를 상태에 저장
    }
  };

  const closePopup = () => {
    setSelectedImage(null); // 팝업 닫기
  };

  const posts = [// 정사각형 안에 사진이 들어가야함
    

    
    { id: 1, image: "/images/post1.jpg" },
    { id: 2, image: "/images/post2.jpg" },
    { id: 3, image: "/images/post3.jpg" },
    { id: 4, image: "/images/post4.jpg" },
    { id: 5, image: "/images/post5.jpg" },
    { id: 6, image: "/images/post6.jpg" },
  ];
  <div className={styles.grid}>
    {posts.map((post) => (
      <div key={post.id} className={styles.square}>
        <img src={post.image} alt={`Post ${post.id}`} />
      </div>
    ))}
  </div>

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Instagram</h2>
        <a href="#">홈</a>
        <a href="#">검색</a>
        <a href="#">릴스</a>
        <a href="#">메시지</a>
        <a href="#">알림</a>
        <a href="#">만들기</a>
        <a href="#">프로필</a>
        <a href="#">더 보기</a>
      </div>
      <div className={styles.profileHeader}>
        <img src="/images/profile.jpg" alt="프로필 사진" />
        
        
        <div className={styles.point}>
          <div>
          <h1>2tae._.y04</h1>
          <button onClick={handleGoToLogin}>가입</button>
          </div>
          <span>게시물 0</span> | <span>팔로워 0</span> | <span>팔로우 0</span>
        </div>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <div 
            key={post.id} 
            className={styles.gridItem}
            onClick={() => handleImageClick(post.id)}// 클릭 이벤트 추가하기
            >

            <img src={post.image} alt={`Post ${post.id}`} />
            <div className={styles.overlay}>
              <span>
                <img src="/icons/heart.svg" alt="하트" /> 110만
              </span>
              <span>
                <img src="/icons/comment.svg" alt="말풍선" /> 110만
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 팝업 */}
      {selectedImage && (
        <div className={styles.popup} onClick={closePopup}>
          <div className={styles.popupContent}>
            <img src={selectedImage} alt="Selected" />
          </div>
    </div>
  )}
  </div>
  );
};

export default ProfilePage;
import React, { useRef, useState } from 'react';

const RubyIntroduction: React.FC = () => {
  // 单张图片地址
  const image = "public/img/loopy.jpg";
  // 视频预览图
  const videoPreview = "public/img/loopy_preview.jpg";
  // 创建视频元素的引用
  const videoRef = useRef<HTMLVideoElement>(null); 
  // 控制视频是否显示
  const [isVideoVisible, setIsVideoVisible] = useState(false); 

  // 点击预览图，显示并播放视频
  const handlePlayVideo = () => {
    setIsVideoVisible(true);
    videoRef.current?.play().catch((err) => {
      console.error('视频播放出错:', err);
    });
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>露比介绍</h1>
      <p>露比是一个 [Loopy（露比）是2001年韩国的国民级动画片
《小企鹅Pororo》中的卡通人物，她以一个粉
红色小海狸的形象出现，拥有可爱粉红脸颊，
给人以温馨和亲切的感觉。
在这个动画系列里，Loopy扮演着Pororo好朋
友的角色，展现了一种既乖巧又带有些许羡慕
复杂情感的性格。
中文名露比
外文名 Loopy
性别早女
性格敏感且害羞，对朋友友善，
守规矩。] ，以下是关于她的照片和视频。</p>

      {/* 单张图片展示 */}
      <div style={{ marginBottom: '20px' }}>
        <h2>露比的照片</h2>
        <img 
          src={image} 
          alt="露比的照片" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </div>

      {/* 视频展示区域 */}
      <div>
        <h2>露比的视频</h2>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          {!isVideoVisible && (
            <img 
              src={videoPreview} 
              alt="露比视频预览" 
              style={{ maxWidth: '100%', height: 'auto' }} 
              onClick={handlePlayVideo}
            />
          )}
          {/* 播放按钮覆盖层（视频未显示时） */}
          {!isVideoVisible && (
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                width: 0, 
                height: 0, 
                borderTop: '20px solid transparent',
                borderLeft: '30px solid white',
                borderBottom: '20px solid transparent',
                marginLeft: '5px'
              }} />
            </div>
          )}
          {/* 实际视频元素，根据状态控制显示/隐藏 */}
          <video 
            src="public/img/loopy.mp4" 
            controls 
            style={{ maxWidth: '100%', display: isVideoVisible ? 'block' : 'none' }} 
            ref={videoRef}
          >
            您的浏览器不支持视频播放，请更换浏览器尝试。
          </video>
        </div>
      </div>
    </div>
  );
};

export default RubyIntroduction;

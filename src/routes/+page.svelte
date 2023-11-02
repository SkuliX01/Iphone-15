<script>
    let time = getTime();
    function getTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      return hours + ":" + String(minutes).padStart(2, '0');
    }
  
    function updateTime() {
      time = getTime();
    }
  
    setInterval(updateTime, 1000);

    function ConnectMe() {
        window.open('https://twitter.com/SkuliX01')
    }

  </script>


<div class="flex justify-center">
    <div class="flex justify-center mt-[2rem]">
        <div class="w-[320px] h-[635px] border-[5px] border-[#c9c9c9] rounded-[45px] pr-4">
            <div class="w-[310px] h-[625px] border-[8px] border-black rounded-[40px] absolute justify-center items-center">
                <div class="w-[110px] h-[27px] absolute mt-[9px] ml-[6rem] rounded-full bg-black static animate-scaleOutIs hover:animate-scaleIs">
                    <div class="w-[15px] h-[15px] bg-black mt-[6px] rounded-full ml-[85px] flex ">
                        <img src="/images/camera.png" class="bg-black" alt="front-camera">
                    </div>
                </div>
                <div>
                    <img src="/images/hud.png" alt="" class="absolute battery">
                </div>
                <div class="timer">
                    <p class="absolute mt-[0.75rem] timer ml-[1.6rem] time-display">{time}</p>
                </div>
                <div class="absolute w-[275px] h-[50px] mt-[34.5rem] ml-[0.65rem] rounded-[20px] opacity-50">
                </div>
                <div>
                    <img src="/icons/app-store.png" alt="" class="absolute w-[40px] bg-transparent mt-[34.85rem] ml-[1.7rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <img src="/icons/ios-message.png" alt="" class="absolute w-[40px] bg-transparent mt-[34.85rem] ml-[4.8rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <a href="#" on:click={ConnectMe}>
                    <img src="/icons/contacts.png" alt="" class="absolute w-[40px] bg-transparent mt-[34.85rem] ml-[7.9rem] animate-scaleOutIcon hover:animate-scaleIcon" title="Made by SkuliX">
                    </a>
                    <img src="/icons/safari.png" alt="" class="absolute w-[40px] bg-transparent mt-[34.85rem] ml-[11rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <img src="/icons/settings.png" alt="" class="absolute w-[40px] bg-transparent mt-[34.85rem] ml-[14.1rem] animate-scaleOutIcon hover:animate-scaleIcon">
                </div>
                <div>
                    <img src="/icons/wallet.png" alt="" class="absolute w-[45px] bg-transparent mt-[5rem] ml-[1.6rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[8.2rem] ml-[1.75rem] label">Wallet</p>
                    <img src="/icons/facetime.png" alt="" class="absolute w-[45px] bg-transparent mt-[5rem] ml-[5.5rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[8.2rem] ml-[5.15rem] label">FaceTime</p>
                    <img src="/icons/apple-tv.png" alt="" class="absolute w-[45px] bg-transparent mt-[5rem] ml-[9.4rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[8.2rem] ml-[9.35rem] label">AppleTV</p>
                    <img src="/icons/camera.png" alt="" class="absolute w-[45px] bg-transparent mt-[5rem] ml-[13.3rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[8.2rem] ml-[13.25rem] label">Camera</p>
                </div>
                <div>
                    <img src="/icons/calendar.png" alt="" class="absolute w-[45px] bg-transparent mt-[10rem] ml-[1.6rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[13.2rem] ml-[1.3rem] label">Calendar</p>
                    <img src="/icons/snapchat.png" alt="" class="absolute w-[45px] bg-transparent mt-[10rem] ml-[5.5rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[13.2rem] ml-[5.15rem] label">SnapChat</p>
                    <img src="/icons/mail.png" alt="" class="absolute w-[45px] h-[47px] bg-transparent mt-[9.85rem] ml-[9.4rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[13.2rem] ml-[10.06rem] label">Mail</p>
                    <img src="/icons/photos.png" alt="" class="absolute w-[45px] bg-transparent mt-[10rem] ml-[13.3rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[13.2rem] ml-[13.5rem] label">Photos</p>
                </div>
                <div>
                    <img src="/icons/apple-stock.png" alt="" class="absolute w-[50px] bg-transparent mt-[15rem] ml-[1.4rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[18.2rem] ml-[1.95rem] label">Stock</p>
                    <img src="/icons/weather.png" alt="" class="absolute w-[45px] bg-transparent mt-[15rem] ml-[5.5rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[18.2rem] ml-[5.45rem] label">Weather</p>
                    <img src="/icons/apple-music.png" alt="" class="absolute w-[45px] h-[47px] bg-transparent mt-[15rem] ml-[9.4rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[18.2rem] ml-[9.85rem] label">Music</p>
                    <img src="/icons/calculator.png" alt="" class="absolute w-[45px] h-[45px] bg-transparent mt-[15.1rem] ml-[13.3rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[18.2rem] ml-[13rem] label">Calculator</p>
                </div>
                <div>
                    <img src="/icons/maps.png" alt="" class="absolute w-[50px] bg-transparent mt-[20rem] ml-[1.4rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[23.5rem] ml-[1.9rem] label">Maps</p>
                    <img src="/icons/reminders.png" alt="" class="absolute w-[50px] bg-transparent mt-[20rem] ml-[5.45rem] animate-scaleOutIcon hover:animate-scaleIcon">
                    <p class="absolute bg-transparent mt-[23.5rem] ml-[5.15rem] label">Reminders</p>
                </div>
                <img src="/images/wallpaper.jpeg" alt="wallpaper" class="w-[1000px] h-[609px] rounded-[30px] mx-auto my-auto">
            </div>
        </div>
    </div>
</div>
<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    .timer {
        background-color: transparent;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: white;
    }
    .battery {
        background-color: transparent;
        width: 50px;
        margin-top: 1rem;
        margin-left: 14rem;
    }
    .label {
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: 300;
        font-size: 11px;
    }
</style>
export default function LoadingSpinner() {
    return (
      <svg
        className="mx-20 mb-80 h-20 w-20 animate-spin"
        width="480"
        height="480"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          opacity="0.3"
          d="M480 240C480 372.548 372.548 480 240 480C107.452 480 0 372.548 0 240C0 107.452 107.452 0 240 0C372.548 0 480 107.452 480 240ZM74.8361 240C74.8361 331.218 148.782 405.164 240 405.164C331.218 405.164 405.164 331.218 405.164 240C405.164 148.782 331.218 74.8361 240 74.8361C148.782 74.8361 74.8361 148.782 74.8361 240Z"
          fill="#A08452 "
        />
        <path
          d="M442.582 240C463.247 240 480.298 223.148 477.089 202.733C474.151 184.041 469.006 165.718 461.731 148.156C449.67 119.038 431.992 92.5804 409.706 70.2944C387.42 48.0083 360.962 30.33 331.844 18.2689C314.282 10.9944 295.959 5.84918 277.267 2.91102C256.852 -0.297887 240 16.7526 240 37.418V37.418C240 58.0834 256.962 74.4147 277.099 79.0565C285.997 81.1075 294.73 83.8977 303.205 87.4084C323.244 95.7087 341.452 107.875 356.789 123.211C372.125 138.548 384.291 156.756 392.592 176.794C396.102 185.27 398.892 194.003 400.943 202.901C405.585 223.038 421.917 240 442.582 240V240Z"
          fill="#A08452"
        />
      </svg>
    )
  }
  
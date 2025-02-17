export default function Home() {
    return (
      <div className="container">
        <h1>Ongi etorri!</h1>
        <p>Webgune dibertigarria!</p>
        <style jsx>{`
          .container {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            animation: fadeIn 2s;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }
  
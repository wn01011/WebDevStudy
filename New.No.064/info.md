TCP를 이용한 서버 구축

TCP란 << 사전 지식이 필요하다.

# OSI 7 Layer

- 통신을 진행하는 과정을 단계로 나눈 규칙
- 이름처럼 7 단계로 나누어져 있으며 하드웨어부터 프로그램까지 정보를 주고받는 과정이다.

# TCP/IP 4 Layer

- OSI 7 Layer와 마찬가지로 통신의 과정을 단계로 나눈 규칙이다.
- OSI 7 Layer보다 많이 사용된다.
- 우리가 말하는 IP는 TCP/IP의 2단계인 Internet Protocol을 뜻한다.
- 3단계에는 TCP / UDP를 포함한다.
- 4단계에는 HTTP(HTML, 브라우저), FTP(FileZilla), SSH(Putty) 등을 포함한다.
- 각 단계(계층)
  1. Network Interface
     - 데이터(패킷)를 주고받는 과정
     - 에러 확인, 패킷 생성 등등의 작업을 한다.
  2. Internet
     - 목적지에 연결한다.
     - IP 주소 : 요청을 받는 목적지
  3. Transport
     - 통신 연결을 제어한다.
     - TCP / UDP 방식이 있다.
  4. Application
     - 프로그램(브라우저)에 데이터를 전달한다.

# TCP

- 연결하는 방식
  - 출발지(요청을 보낸 곳)와 목적지(서버)를 미리 연결하고 정보를 전달한다.
- 연결로 정보를 제대로 받았는지 확인한다. => 신뢰도가 높다.
- 단점은 연결하고 검사하는 과정들 때문에 UDP보다 느리다.
- 3-way handshaking 과정을 통해 연결한다.
  1. 클라이언트(브라우저)가 서버에 요청을 보낸다.(SYN => synchronize sequence numbers)
  2. 서버는 브라우저에게 요청 수락을 보낸다.(SYN/ACK)
  3. 브라우저는 요청 수락을 잘 받았다고 서버에 보낸다.(ACK => acknowledgment(승인))
  4. 데이터를 주고 받는다.

# UDP

- 연결하지 않는 방식
- 정보를 보낼 뿐 자세한 점검은 하지 않는다.
- 단점은 데이터 누락 시에 대한 처리가 없어 신뢰도가 낮다.
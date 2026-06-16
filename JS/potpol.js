function GiveContent(num){
    const screen = document.getElementById('ability-screen-js');


    if (num == 1){
        screen.innerHTML = 
        `
                         <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 45px; gap: 15px;">
                        <img src="../images/AESDES.png" alt="이미지없음." height="300px" width="500px">
                        <div style="color: black; background-color: aliceblue; height: 250px; display: flex; flex-direction:column; align-items: center; justify-content: center; padding: 15px;">
                         <b style="font-size: 25px;">Information Security Theory Mechanisms</b><br>
                            AES, DES의 전체 알고리즘을 역설계하는 프로젝트의 수행은 SUBBYTES, SHIFTROWS, MIXCOLUMNS, ADDROUNDKEY와 10round에 사용될 128비트의 키를 산출하는 Key expansion 등 현 정보보안의 기밀성을 유지하는 핵심 알고리즘들을 깊이 있게 이해할 수 있는 경험이었습니다.<br><br>

                         또한 비트 단위의 데이터들이 혼합되고 칸을 이동하며 연산자에 의해 마스킹되는 상세한 매커니즘을 직접 설계하는 과정을 겪으며, 추상화를 최대한으로 배제한 로우 레벨(Low-level)의 데이터 흐름을 관찰함으로서 컴퓨터 역학에 대한 미시적인 관점을 기를 수 있었던 프로젝트였습니다.

                        </div>
                         
                    </div>`
    }

    else if (num == 2){
        screen.innerHTML = `
                         <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 45px; gap: 15px;">
                        <img src="../images/data_structure.png" alt="이미지없음." height="300px" width="500px">
                        <div style="color: black; background-color: aliceblue; height: 250px; display: flex; flex-direction:column; align-items: center; justify-content: center; padding: 15px;">
                         <b style="font-size: 25px;">Data structure project</b><br>
                         자료구조 과목에서 진행하였던 프로젝트에서는 덱, 큐, 스택, 이진 트리 등 실제 네트워크나 상용 프로그램의 데이터 처리 과정에서 응용되는 알고리즘을 다루며 특정 데이터를 저장하거나 찾고 산출되는 방식을 학습할 수 있었던 경험이었습니다. <br><br>
                         프로젝트에서 다뤘던 여러 구조체와 함수들은 컴퓨터에 관한 이해를 단순 계산장치나 개념적 층위에서 실제 인간 논리를 치환할 수 있는 매커니즘으로서 격상시켰고, 포인터 등 C++ 언어가 지니고 있는 직접 메모리 접근 방식을 적극적으로 적용하면서 실제 계산복잡도나 효율을 실리적으로 고찰해볼 수 있는 시간이 되었습니다. 

        
                        </div>
                         
                    </div>`;
    }

    else if (num ==3 ){
        screen.innerHTML = `
                         <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 45px; gap: 15px;">
                        <img src="../images/TCP-IP.jpg" alt="이미지없음." height="300px" width="500px">
                        <div style="color: black; background-color: aliceblue; height: 250px; display: flex; flex-direction:column; align-items: center; justify-content: center; padding: 15px;">
                         <b style="font-size: 25px;">Network structure investigation</b><br>
                         인터넷 프로토콜과 네트워크에 관련한 조사와 이를 정리한 문헌화는 가장 직관적인 수기 방식으로 레거시한 인터넷 체계를 도해했다는 점에서 의의가 있었다고 생각합니다. 파편화된 용어와 네트워크 개념들을 연결함으로서 컴퓨터의 데이터 통신이라는 가장 거시적 개념을 보다 적확하게 이해할 수 있었습니다.  <br><br>
                         프로젝트 중 개인적으로 가장 흥미로웠던 기존의 유선 서킷 통신에서 노드를 응용한 패킷 통신으로의 발전은 현 인터넷 체제에 관한 근원적인 인과관계를 파악할 수 있었던 기회였음이라 여깁니다. 또한 이는 이러한 시스템이 유발하는 통신상의 보안문제를 유추해봄으로서 경험을 실무적 직관으로서 연장할 수 있는 계기가 되었습니다.

        
                        </div>
                         
                    </div>`;
    }

}
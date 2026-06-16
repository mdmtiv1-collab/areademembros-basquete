// =============================================================================
// BasketballPro Members Area - 150 Training Exercises with YouTube Video Lessons
// Each exercise links to a REAL YouTube training video (100% Brazilian Portuguese - 150 VIDEOS UNICOS)
// =============================================================================

const shootingVideos = ["XDCr4fXRyNE","vQmvdSgDHbA","aUibLszj6Jg","YZE9ehos9Is","ql-Z_txtPAg","Nys6iOhtjp0","Ou6bH-pAdzM","2i9p_nRVR5o","ZzKpMIl8e70","Ty4jz3xmISM","PJSMtiptJe4","yOGjf2yO5qI","TIvDFwETkQ0","copmUrSueLI","_8dP0tlkvRA","6d8fDUW94CA","EgBnndUUefE","JNY3DvqSB2s","h0ft4AKB4DE","pRTDqJD_0P0","hwnFMRtEHwY","y5EouPJ2ac0","14dxEJg64bs","eZOAiYhg8TA","Eyvmz18aepE"];
const dribblingVideos = ["WDDC-CeYOGc","94RuZbZvxOE","DgZFXXW10D4","46wekgD8EBc","RX5L_7bsO9s","SCeTbiivf1g","AHFyPq20M70","5uig1_Boby4","OTPybRrZIPY","eeSasYguW3o","orkY_l9NIl4","R25P1I4f9j8","54d3yMlQJ8A","3KTZ1gvrTrI","zmOyi9RYjyc","DGHPi7X70Gw","rit5APgO_-M","Bs3mpmRXrtQ","ea6Um9XnlUg","pkOPogW2P-0","j1pALHc5VdE","w-B4PjbysJM","8Mx1SM_WrLE","lBicpNuUNLk","23kmMETwjls"];
const passingVideos = ["igRdMUV0RsA","r2SeXYMcG3o","QGCG9Tqqs6o","Gsxfbk0_bsY","H1T8AbXSlZQ","8tCs7T_T9pI","kBoEwhDAwTA","usGIWm14D_w","gfXxngUSFVE","jj41DcSuLdA","ZfzIZec--AM","TvdgRhHVF0I","9RyAN4qCoLU","Oo_ZMAE8YeQ","1krc1WSo1mY","PHdHgILYO2U","H_86_EBofIM","llRHq4QWWdo","UmW0RU1nGCI","NTCH-kw3TVs","76b1iPQxd1c","LKx8EXsS2pM","0cfNWCTLJfQ","NFgflxsor8U","dIhbWv1LqjQ"];
const defenseVideos = ["sko1UuNP_C0","hHpNYKzDRaE","plYC_-Zko5E","gb52y8CTEw4","6IsTVwRBE80","M4i1ayLCp_Q","nZSWtYITbIc","UFk0vb3wrYw","hoXkT58qKzM","JjaAEjXVNe8","Y30IuhpWRtA","ArPem6yD_cE","UnZYh2BoUfg","ONwMMH3pdEM","rUngFjrnc9o","ZsO001SqKa0","i7zmy3NQuVM","tIJ-VD9drS0","sCKttmIHytg","2yV8dqUULao","wF16nuseWQA","3AabPeW4VLs","i20arLItcIY","Ivb69YN_v38","YmfwINy8-xY"];
const speedAgilityVideos = ["IF3eeTegtaM","ZsLv21Cxzrs","vcLkbmdGv5M","O9YoavCPkMU","0ZdY4IAObv0","v9J2Lwzjbac","p2X18fkVeHY","mmItTe2kHYo","PRivQvF_R0w","CTfCIfWIbjg","ZWeMOXRRkPo","knwpRXGtDJg","x0__QGKM-wY","gtbvLLtMulo","2uQtTn8XJS8","zIpWIm9K6UA","9clIuZNMMCA","Ae09TohjKX0","HbjXqrUCS_U","1PC0PS9RMB8","dMo23BKF-G0","l-Tf2jn98z0","adT8oHgVtzw","jczV4lYH628","a0f85oM9iP8"];
const conditioningVideos = ["2wwmIK-usgU","8kwn3NzFeZU","15hAD_4q64k","XV50-sgIISo","ujEaGYoHoXE","5d07o5aBtrw","JS3yHnB3U8k","ZJ0JdXhKgK4","LS9MgTtyur8","WA564xCGgnc","PrOe7h-SH-U","nLoPtXIDlYE","D8n4Z_EJCuE","xX_hlkF7j8Q","I-mJB6uK98M","rcX0D7W3VNs","fJd3UmnQ17M","NefPoQr9ms8","S70YcZ566k8","GeA6qM5KNwk","fYr0nbQjPHg","YRnrvJh0dMk","f8_GLN4TH9I","RkYgTW8_o2s","t87hg_b69aU"];

// Full Training Data with 150 exercises (25 per category)
const categories = [
  {
    id: "arremesso",
    title: "Exercícios de Arremesso",
    emoji: "🏀",
    exercises: [
      { id: "arr_1", title: "1. Mecânica Básica e Alinhamento", difficulty: "Iniciante", duration: "8 min", youtubeId: shootingVideos[0],
        desc: "Aprenda a posição correta do corpo, alinhamento do cotovelo e como segurar a bola para um arremesso perfeito. Fundamento essencial para iniciantes.",
        steps: ["Posicione os pés na largura dos ombros, levemente apontados para a cesta.", "Segure a bola com a mão dominante por baixo e a guia ao lado.", "Mantenha o cotovelo formando um ângulo de 90 graus.", "Olhe para a parte de trás do aro como ponto focal.", "Estenda o braço completamente e quebre o pulso no momento do arremesso."] },
      { id: "arr_2", title: "2. Arremesso de Uma Mão de Curta Distância", difficulty: "Iniciante", duration: "8 min", youtubeId: shootingVideos[1],
        desc: "Treino focado em arremessos próximos à cesta usando apenas a mão dominante para desenvolver controle e toque na bola.",
        steps: ["Posicione-se a 1 metro da cesta.", "Use apenas a mão dominante para arremessar.", "Foque na rotação reversa da bola (backspin).", "Mantenha o follow-through por 2 segundos após cada arremesso.", "Faça séries de 10 arremessos, buscando 8 acertos mínimos."] },
      { id: "arr_3", title: "3. Arremesso na Zona Morta (Corner)", difficulty: "Iniciante", duration: "10 min", youtubeId: shootingVideos[2],
        desc: "Pratique arremessos do canto da quadra, a zona mais curta de 3 pontos, desenvolvendo precisão e consistência nessa posição estratégica.",
        steps: ["Posicione-se no canto da linha de 3 pontos.", "Alinhe o corpo com a cesta mesmo estando no ângulo.", "Use o impulso das pernas para gerar potência.", "Solte a bola no ponto mais alto do salto.", "Alterne entre os dois cantos a cada 5 arremessos."] },
      { id: "arr_4", title: "4. Mikan Drill de Arremesso", difficulty: "Intermediário", duration: "11 min", youtubeId: shootingVideos[3],
        desc: "O clássico Mikan Drill para desenvolver finalizações próximas à cesta com ambas as mãos, alternando lados continuamente.",
        steps: ["Posicione-se sob a cesta do lado direito.", "Faça uma bandeja com a mão direita.", "Pegue o rebote e mude para o lado esquerdo.", "Faça uma bandeja com a mão esquerda.", "Continue alternando por 60 segundos sem parar."] },
      { id: "arr_5", title: "5. Arremesso após Giro de Pivô", difficulty: "Intermediário", duration: "11 min", youtubeId: shootingVideos[4],
        desc: "Combine movimentos de pivô com arremessos para simular situações reais de jogo onde você recebe a bola e precisa criar espaço.",
        steps: ["Receba a bola de costas para a cesta.", "Execute um pivô frontal ou reverso.", "Ao completar o giro, enquadre-se com a cesta.", "Arremesse imediatamente após o enquadramento.", "Pratique pivôs para ambos os lados."] },
      { id: "arr_6", title: "6. Catch & Shoot Estático de Média Distância", difficulty: "Intermediário", duration: "10 min", youtubeId: shootingVideos[5],
        desc: "Treine o arremesso rápido após receber o passe, desenvolvendo velocidade de liberação e posicionamento dos pés.",
        steps: ["Peça um passe (ou use a parede) na região de meia distância.", "Ao receber, posicione os pés rapidamente.", "Flexione as pernas durante a recepção.", "Arremesse no ritmo da recepção sem hesitar.", "Foque em ser rápido mas controlado."] },
      { id: "arr_7", title: "7. Arremesso da Linha de Lance Livre", difficulty: "Iniciante", duration: "8 min", youtubeId: shootingVideos[6],
        desc: "Domine a arte do lance livre com rotina consistente, respiração controlada e mecânica repetitiva para maximizar sua porcentagem.",
        steps: ["Posicione-se no centro da linha de lance livre.", "Crie uma rotina pré-arremesso (1-3 quiques).", "Respire fundo antes de cada arremesso.", "Mantenha os olhos fixos na cesta.", "Execute o arremesso com a mesma mecânica sempre."] },
      { id: "arr_8", title: "8. Fadeaway de Curta Distância", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[7],
        desc: "Aprenda o arremesso fadeaway estilo Michael Jordan, criando separação do defensor com movimento para trás durante o arremesso.",
        steps: ["Receba a bola no poste médio.", "Dê um passo para trás criando distância do defensor.", "Incline o tronco levemente para trás durante o salto.", "Mantenha o braço de arremesso estável e alto.", "Solte a bola no ponto mais alto, com arco elevado."] },
      { id: "arr_9", title: "9. Arremesso após Crossover", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[8],
        desc: "Combine drible crossover com arremesso para criar espaço e finalizar em situações de isolamento contra o defensor.",
        steps: ["Inicie driblando na mão direita em velocidade moderada.", "Execute um crossover forte para a mão esquerda.", "Ao mudar de direção, pare em posição de arremesso.", "Recolha a bola rapidamente e suba para o arremesso.", "Pratique crossover para ambos os lados."] },
      { id: "arr_10", title: "10. Step-back de Três Pontos", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[9],
        desc: "Domine o step-back de 3 pontos estilo James Harden, criando espaço com passo para trás e arremessando da linha de 3.",
        steps: ["Avance driblando em direção ao defensor.", "Execute um passo largo para trás com controle.", "Mantenha equilíbrio ao aterrissar nos dois pés.", "Eleve rapidamente para o arremesso de 3 pontos.", "Garanta que seus pés não pisem na linha."] },
      { id: "arr_11", title: "11. Arremesso saindo do Bloqueio (Pick & Roll)", difficulty: "Intermediário", duration: "11 min", youtubeId: shootingVideos[10],
        desc: "Pratique arremessos após sair de bloqueios, simulando situações de pick and roll ofensivo com velocidade e precisão.",
        steps: ["Simule sair atrás de um bloqueio (cone ou parceiro).", "Ao passar pelo bloqueio, receba o passe.", "Posicione os pés rapidamente na direção da cesta.", "Arremesse antes que o defensor se recupere.", "Varie posições: pop para fora ou roll para dentro."] },
      { id: "arr_12", title: "12. Arremesso Rápido após Passe", difficulty: "Intermediário", duration: "10 min", youtubeId: shootingVideos[11],
        desc: "Desenvolva velocidade de liberação arremessando imediatamente após receber o passe, sem tempo para pensar - puro reflexo.",
        steps: ["Movimente-se para uma posição livre na quadra.", "Receba o passe com as mãos já preparadas para arremessar.", "Em um único movimento, receba e arremesse.", "Objetivo: liberação em menos de 0.8 segundos.", "Pratique em diferentes posições da quadra."] },
      { id: "arr_13", title: "13. Arremesso em Velocidade na Transição", difficulty: "Intermediário", duration: "11 min", youtubeId: shootingVideos[12],
        desc: "Treine arremessos durante a transição rápida de defesa para ataque, mantendo a forma mesmo em velocidade máxima.",
        steps: ["Inicie correndo do fundo da quadra.", "Receba o passe na transição em velocidade.", "Reduza a velocidade com passos controlados.", "Enquadre o corpo com a cesta rapidamente.", "Arremesse mantendo a mecânica correta."] },
      { id: "arr_14", title: "14. Catch & Shoot de Três Pontos", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[13],
        desc: "Arremessos de 3 pontos após recepção rápida do passe. Foco em posicionamento dos pés e velocidade de liberação da linha de 3.",
        steps: ["Posicione-se atrás da linha de 3 pontos.", "Receba o passe com os pés já alinhados.", "Use as pernas como fonte primária de potência.", "Mantenha o arco alto para aumentar a chance de acerto.", "Faça séries de 5 posições diferentes da linha de 3."] },
      { id: "arr_15", title: "15. Arremesso Desequilibrado sob Pressão", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[14],
        desc: "Pratique arremessos em situações de desequilíbrio e pressão defensiva, preparando-se para os momentos mais difíceis do jogo.",
        steps: ["Simule contato leve durante o arremesso.", "Pratique arremessar com pés não perfeitamente alinhados.", "Foque em manter o braço de arremesso estável.", "Arremesse após movimentos desequilibrados.", "Desenvolva controle corporal em situações adversas."] },
      { id: "arr_16", title: "16. Arremesso de Flutuador (Floater)", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[15],
        desc: "O floater é essencial para jogadores rápidos que precisam finalizar sobre pivôs grandes. Aprenda o toque suave e o arco alto.",
        steps: ["Penetre driblando em direção ao garrafão.", "Ao encontrar o pivô, solte a bola com uma mão.", "Lance a bola com arco muito alto sobre o defensor.", "Use o toque suave dos dedos, não a palma.", "Pratique floaters de ambos os lados do aro."] },
      { id: "arr_17", title: "17. Arremesso na Tabela com Ângulo", difficulty: "Intermediário", duration: "11 min", youtubeId: shootingVideos[16],
        desc: "Domine o uso da tabela para bandejas e arremessos em ângulos de 45 graus, usando o quadrado da tabela como alvo.",
        steps: ["Posicione-se em ângulo de 45 graus da cesta.", "Mire no canto superior do quadrado da tabela.", "Use força moderada - a tabela absorve impacto.", "Pratique dos dois lados da quadra.", "Varie a distância de 1 a 3 metros do aro."] },
      { id: "arr_18", title: "18. Arremesso de Três Pontos após Drible Lateral", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[17],
        desc: "Combine drible lateral com arremesso de 3 pontos para criar espaço horizontalmente antes de finalizar de longa distância.",
        steps: ["Drible lateralmente ao longo da linha de 3 pontos.", "Pare com controle usando parada em dois tempos.", "Enquadre o corpo com a cesta durante a parada.", "Arremesse imediatamente no ritmo da parada.", "Pratique movendo para ambos os lados."] },
      { id: "arr_19", title: "19. Arremesso com Defensor Ativo", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[18],
        desc: "Treine arremessos com um defensor contestando ativamente, desenvolvendo concentração e capacidade de finalizar sob pressão real.",
        steps: ["Peça a um parceiro para contestar seus arremessos.", "Foque na cesta mesmo com mão na sua visão.", "Use pump fakes para tirar o defensor do chão.", "Arremesse no momento em que o defensor aterrissar.", "Mantenha a confiança mesmo com contestação."] },
      { id: "arr_20", title: "20. Arremesso Cansado (Fim de Treino)", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[19],
        desc: "Pratique arremessos no final do treino quando está fisicamente exausto, simulando arremessos nos últimos minutos de um jogo apertado.",
        steps: ["Execute uma série de sprints antes de arremessar.", "Arremesse imediatamente após o condicionamento.", "Mantenha a mesma mecânica apesar do cansaço.", "Foque em usar as pernas mesmo fatigado.", "Desenvolva resistência mental para momentos decisivos."] },
      { id: "arr_21", title: "21. Arremesso de Gancho Curtíssimo", difficulty: "Intermediário", duration: "11 min", youtubeId: shootingVideos[20],
        desc: "O gancho curtíssimo (baby hook) é uma arma letal perto da cesta. Aprenda a técnica com Kareem Abdul-Jabbar como inspiração.",
        steps: ["Posicione-se com as costas parcialmente para a cesta.", "Gire o ombro em direção ao aro.", "Lance a bola com um arco usando o braço estendido.", "Proteja a bola com o corpo durante o giro.", "Pratique ganchos com ambas as mãos."] },
      { id: "arr_22", title: "22. Arremesso após Finta (Pump Fake)", difficulty: "Intermediário", duration: "11 min", youtubeId: shootingVideos[21],
        desc: "Domine o pump fake para tirar o defensor do chão e arremessar com espaço, uma das jogadas mais inteligentes do basquete.",
        steps: ["Receba a bola em posição de arremesso.", "Execute uma finta realista subindo a bola rapidamente.", "Observe se o defensor salta.", "Se ele saltar, dê um passo para o lado e arremesse.", "Se não saltar, arremesse normalmente."] },
      { id: "arr_23", title: "23. Pull-up Jump Shot de Média Distância", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[22],
        desc: "O pull-up jumper é o arremesso mais importante para armadores. Pare o drible repentinamente e arremesse de meia distância.",
        steps: ["Drible em velocidade moderada em direção à cesta.", "Pare repentinamente puxando a bola para cima.", "Salte verticalmente no momento da parada.", "Arremesse no ponto mais alto do salto.", "Pratique de diversas distâncias entre 3m e 6m."] },
      { id: "arr_24", title: "24. Arremesso sob Tabela de Costas", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[23],
        desc: "Finalizações criativas sob a cesta passando por baixo do aro e usando reverse layups e arremessos com a mão trocada.",
        steps: ["Penetre de um lado da cesta.", "Passe por baixo do aro para o outro lado.", "Arremesse com a mão do lado oposto.", "Use a tabela como proteção contra o toco.", "Pratique reverse layups com ambas as mãos."] },
      { id: "arr_25", title: "25. Simulação de Arremesso de Último Segundo", difficulty: "Avançado", duration: "14 min", youtubeId: shootingVideos[24],
        desc: "Treine arremessos de último segundo com pressão de tempo, preparando-se mentalmente para os momentos mais decisivos do jogo.",
        steps: ["Use um cronômetro com 5 segundos ou menos.", "Receba a bola e tome decisão rápida.", "Arremesse antes do buzzer soar.", "Pratique diferentes cenários: empate, 1 ponto atrás.", "Desenvolva calma e confiança sob pressão extrema."] }
    ]
  },
  {
    id: "resistencia",
    title: "Resistência e Físico",
    emoji: "🏃‍♂️",
    exercises: [
      { id: "res_1", title: "1. Suicídios de Quadra Inteira", difficulty: "Iniciante", duration: "10 min", youtubeId: conditioningVideos[0],
        desc: "O clássico drill de suicídio: sprints de ida e volta em distâncias crescentes para construir resistência cardiovascular específica do basquete.",
        steps: ["Inicie na linha de fundo.", "Corra até a linha de lance livre e volte.", "Corra até a linha do meio e volte.", "Corra até a linha de lance livre oposta e volte.", "Corra até a outra linha de fundo e volte. Repita 3-5 vezes."] },
      { id: "res_2", title: "2. Sprint e Backpedal Contínuo", difficulty: "Iniciante", duration: "10 min", youtubeId: conditioningVideos[1],
        desc: "Alterne entre sprint frontal e corrida de costas para desenvolver a transição rápida entre ataque e defesa.",
        steps: ["Sprinte para frente até a metade da quadra.", "Faça backpedal (corrida de costas) até o início.", "Mantenha o centro de gravidade baixo no backpedal.", "Não cruze os pés durante o backpedal.", "Complete 8-10 repetições com 30s de descanso."] },
      { id: "res_3", title: "3. Mikan Drill para Cardio", difficulty: "Intermediário", duration: "15 min", youtubeId: conditioningVideos[2],
        desc: "Versão cardio do Mikan Drill: bandejas alternadas em velocidade máxima por períodos prolongados para resistência.",
        steps: ["Faça bandejas alternadas sob a cesta.", "Mantenha velocidade alta por 45 segundos.", "Descanse 15 segundos entre séries.", "Complete 6-8 séries.", "Foque em manter a técnica mesmo cansado."] },
      { id: "res_4", title: "4. Slide Defensivo de Linha a Linha", difficulty: "Intermediário", duration: "15 min", youtubeId: conditioningVideos[3],
        desc: "Deslocamentos defensivos laterais entre as linhas da quadra para fortalecer pernas e melhorar a postura defensiva.",
        steps: ["Adote a postura defensiva baixa.", "Deslize lateralmente de uma linha à outra.", "Toque a linha com a mão antes de voltar.", "Mantenha o quadril baixo durante todo o exercício.", "Complete 3 séries de 10 slides em cada direção."] },
      { id: "res_5", title: "5. Saltos Laterais de Obstáculos", difficulty: "Intermediário", duration: "15 min", youtubeId: conditioningVideos[4],
        desc: "Desenvolva explosão lateral saltando sobre obstáculos (cones ou linhas) para melhorar potência nas mudanças de direção.",
        steps: ["Posicione cones ou objetos em linha.", "Salte lateralmente sobre cada obstáculo.", "Aterrisse com os dois pés e estabilize.", "Volte saltando na direção oposta.", "Aumente a velocidade progressivamente."] },
      { id: "res_6", title: "6. Sprint de Contra-Ataque com Bandeja", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[5],
        desc: "Simule contra-ataques em velocidade máxima finalizando com bandeja, treinando cardio e finalização simultâneos.",
        steps: ["Inicie na linha de fundo defensiva.", "Sprinte até a cesta oposta em velocidade máxima.", "Finalize com bandeja controlada.", "Trate e corra de volta.", "Repita 10 vezes alternando os lados da bandeja."] },
      { id: "res_7", title: "7. Flexão de Braço Explosiva com Bola", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[6],
        desc: "Flexões explosivas usando uma bola de basquete para desenvolver força na parte superior do corpo e estabilidade do core.",
        steps: ["Posicione uma mão na bola de basquete.", "Execute flexão completa até o peito tocar o chão.", "Empurre explosivamente e troque a mão na bola.", "Mantenha o abdômen contraído durante todo exercício.", "Faça 3 séries de 10-15 repetições."] },
      { id: "res_8", title: "8. Prancha Dinâmica com Passe de Bola", difficulty: "Intermediário", duration: "10 min", youtubeId: conditioningVideos[7],
        desc: "Exercício de core em posição de prancha passando a bola entre as mãos para desenvolver estabilidade do tronco.",
        steps: ["Adote posição de prancha alta.", "Coloque a bola de basquete entre as mãos.", "Role a bola de uma mão para outra.", "Mantenha o quadril estável sem rotacionar.", "Segure por 30-45 segundos, 4 séries."] },
      { id: "res_9", title: "9. Agachamento Isométrico com Drible", difficulty: "Intermediário", duration: "10 min", youtubeId: conditioningVideos[8],
        desc: "Agachamento na parede (wall sit) enquanto dribla, fortalecendo quadríceps e melhorando controle de bola simultaneamente.",
        steps: ["Encoste as costas na parede e desça até 90 graus.", "Drible a bola continuamente durante o agachamento.", "Alterne entre mão direita e esquerda.", "Segure a posição por 30-60 segundos.", "Complete 4 séries com 30s de descanso."] },
      { id: "res_10", title: "10. Salto na Caixa com Simulação de Rebote", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[9],
        desc: "Box jumps simulando rebotes para desenvolver impulsão vertical e timing para disputar bolas no ar.",
        steps: ["Posicione-se de frente para uma caixa ou banco.", "Salte explosivamente para cima da caixa.", "No topo, simule pegar um rebote com as mãos altas.", "Desça controladamente e repita.", "Faça 3 séries de 8-10 saltos."] },
      { id: "res_11", title: "11. Deslocamento em Zigue-zague com Carga", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[10],
        desc: "Sprints em zigue-zague carregando a bola para simular mudanças de direção do jogo com resistência física.",
        steps: ["Monte um percurso de cones em zigue-zague.", "Corra em velocidade máxima mudando de direção.", "Mantenha o centro de gravidade baixo nas mudanças.", "Drible a bola durante todo o percurso.", "Complete 5 idas e voltas com 30s de descanso."] },
      { id: "res_12", title: "12. Treino de Impulsão Vertical Contínuo", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[11],
        desc: "Série de saltos verticais contínuos para desenvolver explosão e capacidade de saltar repetidamente durante o jogo.",
        steps: ["Posicione-se sob a tabela.", "Salte tentando tocar o aro ou a tabela.", "Ao aterrissar, salte novamente imediatamente.", "Complete 3 séries de 15 saltos contínuos.", "Foque em manter a altura dos saltos consistente."] },
      { id: "res_13", title: "13. Lançamento de Medicine Ball no Garrafão", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[12],
        desc: "Use medicine ball para desenvolver potência do core e dos braços, simulando a força necessária para passes e arremessos.",
        steps: ["Segure a medicine ball no peito.", "Lance contra a parede com força máxima.", "Receba o retorno e repita.", "Varie: lançamentos por cima da cabeça e laterais.", "Faça 3 séries de 12 lançamentos cada tipo."] },
      { id: "res_14", title: "14. Subida Lateral de Quadra em Velocidade", difficulty: "Intermediário", duration: "10 min", youtubeId: conditioningVideos[13],
        desc: "Sprints laterais cobrindo toda a largura da quadra para melhorar condicionamento e velocidade lateral.",
        steps: ["Posicione-se na lateral da quadra.", "Deslize defensivamente até a lateral oposta.", "Toque a linha e deslize de volta.", "Mantenha postura defensiva durante todo deslocamento.", "Complete 10 travessias cronometradas."] },
      { id: "res_15", title: "15. Passada Dinâmica com Drible Baixo", difficulty: "Intermediário", duration: "10 min", youtubeId: conditioningVideos[14],
        desc: "Combine passadas dinâmicas (lunges) com drible baixo para fortalecer pernas e melhorar controle de bola em movimento.",
        steps: ["Dê passadas largas para frente (lunges).", "Mantenha o drible baixo durante cada passada.", "O joelho de trás deve quase tocar o chão.", "Alterne as pernas e mãos de drible.", "Percorra a quadra inteira ida e volta."] },
      { id: "res_16", title: "16. Burpee com Salto e Extensão de Arremesso", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[15],
        desc: "Burpees adaptados para o basquete com salto e simulação de arremesso no topo, combinando cardio intenso com movimento específico.",
        steps: ["Execute um burpee completo.", "No salto final, simule um arremesso de basquete.", "Estenda completamente os braços no salto.", "Aterrisse e inicie o próximo burpee.", "Faça 3 séries de 10 repetições."] },
      { id: "res_17", title: "17. Corrida de Recuperação Defensiva", difficulty: "Intermediário", duration: "15 min", youtubeId: conditioningVideos[16],
        desc: "Treine a recuperação defensiva após perda de bola, correndo para alcançar o atacante e se posicionar corretamente.",
        steps: ["Inicie atrás da linha de fundo.", "Um parceiro (ou cone) representa o atacante à frente.", "Sprinte para ultrapassar e se posicionar na frente.", "Ao chegar na frente, adote postura defensiva.", "Repita 8 vezes, alternando lados."] },
      { id: "res_18", title: "18. Deslocamento de Reboteiro", difficulty: "Intermediário", duration: "10 min", youtubeId: conditioningVideos[17],
        desc: "Movimentos específicos para disputar rebotes: box out, salto e captura da bola em situações de pressão.",
        steps: ["Posicione-se no garrafão.", "Execute um box out contra parceiro ou cone.", "Salte para pegar a bola lançada na tabela.", "Proteja a bola após a captura com cotovelos largos.", "Faça 4 séries de 8 rebotes."] },
      { id: "res_19", title: "19. Circuito de Abdômen com Drible de 8", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[18],
        desc: "Exercícios abdominais enquanto faz drible em formato de 8 entre as pernas, trabalhando core e controle de bola.",
        steps: ["Sente-se no chão com as pernas levantadas.", "Drible a bola em formato de 8 entre as pernas.", "Mantenha o abdômen contraído durante todo exercício.", "Faça 30 segundos de drible + 30s de prancha.", "Complete 4 circuitos completos."] },
      { id: "res_20", title: "20. Salto sobre Cone com Rotação", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[19],
        desc: "Saltos sobre cones com rotação de 180 graus para desenvolver coordenação, equilíbrio e potência rotacional.",
        steps: ["Posicione cones em linha com 1 metro de distância.", "Salte sobre cada cone girando 180 graus.", "Aterrisse de frente para a direção oposta.", "Continue saltando e girando até o fim.", "Volte saltando na direção oposta com giros."] },
      { id: "res_21", title: "21. Simulação de Prorrogação Exaustiva", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[20],
        desc: "Treino que simula o cansaço de uma prorrogação: exercícios intensos seguidos de arremessos para testar sua resistência mental.",
        steps: ["Execute 30 segundos de burpees ou sprints.", "Imediatamente arremesse 5 lances livres.", "Sem descanso, faça mais 30s de exercício intenso.", "Arremesse mais 5 lances livres.", "Complete 5 ciclos medindo a porcentagem de acerto."] },
      { id: "res_22", title: "22. Sprint com Resistência de Elástico", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[21],
        desc: "Use elástico de resistência para sprints, aumentando a potência muscular das pernas e a aceleração inicial.",
        steps: ["Prenda o elástico na cintura ou colete.", "Um parceiro segura a outra ponta.", "Sprinte contra a resistência do elástico.", "Mantenha a postura inclinada para frente.", "Faça 6-8 sprints de 15 metros."] },
      { id: "res_23", title: "23. Treino de Flexibilidade Dinâmica na Quadra", difficulty: "Iniciante", duration: "10 min", youtubeId: conditioningVideos[22],
        desc: "Alongamentos dinâmicos específicos para basquete que melhoram flexibilidade e preparam o corpo para o treino intenso.",
        steps: ["Faça caminhadas com joelhos altos pela quadra.", "Execute passadas laterais com rotação de tronco.", "Faça chutes frontais com perna estendida.", "Realize aberturas de quadril andando.", "Complete 2 percursos de ida e volta para cada exercício."] },
      { id: "res_24", title: "24. Salto com Bloqueio de Tabela", difficulty: "Intermediário", duration: "10 min", youtubeId: conditioningVideos[23],
        desc: "Saltos verticais simulando bloqueios de arremesso (tocos), desenvolvendo timing e impulsão vertical defensiva.",
        steps: ["Posicione-se sob a cesta.", "Um parceiro arremessa enquanto você salta para bloquear.", "Estenda completamente os braços no salto.", "Aterrisse e prepare-se para o próximo bloqueio.", "Faça 4 séries de 8 tentativas de bloqueio."] },
      { id: "res_25", title: "25. Corrida com Mudança de Direção Contínua", difficulty: "Avançado", duration: "15 min", youtubeId: conditioningVideos[24],
        desc: "Corrida contínua com mudanças de direção a cada 3-5 segundos, simulando os movimentos constantes do basquete em quadra.",
        steps: ["Corra em velocidade moderada pela quadra.", "A cada apito ou a cada 5 segundos, mude de direção.", "Varie entre: sprint, backpedal, slide lateral.", "Mantenha o ritmo por 2-3 minutos contínuos.", "Descanse 1 minuto e repita 4 vezes."] }
    ]
  },
  {
    id: "passe",
    title: "Exercícios de Passe",
    emoji: "🏀",
    exercises: [
      { id: "pas_1", title: "1. Passe de Peito Básico", difficulty: "Iniciante", duration: "8 min", youtubeId: passingVideos[0],
        desc: "O fundamento mais importante do passe: aprenda a mecânica correta do passe de peito com potência e precisão.",
        steps: ["Segure a bola no peito com ambas as mãos.", "Dê um passo em direção ao alvo.", "Empurre a bola estendendo os braços.", "Finalize com os polegares apontando para baixo.", "A bola deve chegar na altura do peito do receptor."] },
      { id: "pas_2", title: "2. Passe Quicado de Precisão", difficulty: "Iniciante", duration: "8 min", youtubeId: passingVideos[1],
        desc: "Domine o passe quicado (bounce pass) para passar a bola por baixo dos braços dos defensores com precisão.",
        steps: ["Segure a bola na altura da cintura.", "Mire no chão a 2/3 da distância até o alvo.", "Lance a bola com firmeza para que quique uma vez.", "A bola deve chegar na cintura do receptor.", "Pratique variando distância e ângulo."] },
      { id: "pas_3", title: "3. Passe de Ombro (Baseball Pass)", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[2],
        desc: "O passe longo estilo beisebol para contra-ataques rápidos. Essencial para iniciar transições eficientes.",
        steps: ["Traga a bola atrás do ombro dominante.", "Dê um passo largo em direção ao alvo.", "Lance a bola em linha reta com força.", "Mantenha a trajetória nivelada e direta.", "Pratique passes de toda a extensão da quadra."] },
      { id: "pas_4", title: "4. Passe por Cima da Cabeça", difficulty: "Iniciante", duration: "8 min", youtubeId: passingVideos[3],
        desc: "Passe overhead para alcançar companheiros por cima da defesa, especialmente útil para pivôs e na entrada do garrafão.",
        steps: ["Eleve a bola acima da cabeça com ambas as mãos.", "Não leve a bola para trás da cabeça.", "Empurre para frente usando os pulsos.", "Mantenha os cotovelos levemente flexionados.", "Direcione para o peito ou acima da cabeça do receptor."] },
      { id: "pas_5", title: "5. Passe de Uma Mão após Drible", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[4],
        desc: "Aprenda a passar com uma mão direto do drible sem segurar a bola, mantendo velocidade e fluidez no jogo.",
        steps: ["Drible em velocidade moderada.", "No ritmo do drible, empurre a bola para o companheiro.", "Não recolha a bola antes de passar.", "Use a mão que está driblando para passar.", "Pratique com ambas as mãos."] },
      { id: "pas_6", title: "6. Passe Sem Olhar (No-Look Pass)", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[5],
        desc: "O passe estilo Magic Johnson: olhe em uma direção e passe em outra para enganar a defesa. Requer visão periférica avançada.",
        steps: ["Desenvolva consciência da posição dos companheiros.", "Olhe fixamente para um lado da quadra.", "Passe a bola para o lado oposto sem olhar.", "Mantenha a cabeça virada até o passe ser completado.", "Comece devagar e aumente a velocidade progressivamente."] },
      { id: "pas_7", title: "7. Passe de Costas Explosivo", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[6],
        desc: "Passe por trás das costas em situações de ataque para surpreender a defesa com passes criativos e imprevisíveis.",
        steps: ["Segure a bola com uma mão atrás do quadril.", "Gire o braço por trás das costas.", "Solte a bola com snap do pulso.", "Mantenha o alvo na visão periférica.", "Pratique parado antes de adicionar movimento."] },
      { id: "pas_8", title: "8. Passe de Bolso para o Pivô", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[7],
        desc: "O pocket pass é essencial para alimentar o pivô no poste baixo, passando a bola por baixo do defensor com rapidez.",
        steps: ["Posicione-se na ala com o pivô no poste baixo.", "Segure a bola na altura do quadril.", "Passe rápido por baixo do braço do defensor.", "A bola deve chegar no quadril do pivô.", "Use passo lateral para criar ângulo de passe."] },
      { id: "pas_9", title: "9. Passe Rápido de Hand-off", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[8],
        desc: "Entrega de mão (hand-off) entre dois jogadores para criar bloqueios e oportunidades de arremesso em movimento.",
        steps: ["Um jogador segura a bola estática.", "O outro corre em direção à bola.", "No momento certo, a bola é entregue de mão em mão.", "O receptor pode arremessar ou penetrar imediatamente.", "Pratique timing e posicionamento."] },
      { id: "pas_10", title: "10. Passe em Gancho em Movimento", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[9],
        desc: "Passe em arco alto (hook pass) enquanto se movimenta para alcançar companheiros por cima de defensores altos.",
        steps: ["Drible em direção ao garrafão.", "Ao encontrar a defesa, eleve a bola com uma mão.", "Lance em arco por cima do defensor.", "Mire no companheiro livre no lado oposto.", "Use o corpo para proteger a bola durante o passe."] },
      { id: "pas_11", title: "11. Passe sob Pressão Defensiva", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[10],
        desc: "Treine a capacidade de fazer passes precisos enquanto sofre pressão defensiva intensa, sem cometer turnovers.",
        steps: ["Um defensor aplica pressão ativa na bola.", "Proteja a bola com pivôs e fintas.", "Encontre janelas de passe entre os braços do defensor.", "Use passes quicados para evitar interceptações.", "Nunca force passes - se não tiver janela, segure."] },
      { id: "pas_12", title: "12. Recepção Dinâmica em Velocidade", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[11],
        desc: "Pratique receber passes enquanto se movimenta em velocidade, desenvolvendo mãos seguras e transição rápida.",
        steps: ["Corra em diferentes ângulos pela quadra.", "Receba passes firmes em velocidade.", "Absorva a bola com as mãos suaves.", "Transicione imediatamente para drible ou arremesso.", "Pratique recepções com uma e duas mãos."] },
      { id: "pas_13", title: "13. Passe Longo de Contra-Ataque", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[12],
        desc: "Passes longos de toda a quadra para iniciar contra-ataques devastadores após rebotes ou roubos de bola.",
        steps: ["Pegue o rebote e olhe imediatamente para frente.", "Identifique o companheiro correndo no contra-ataque.", "Lance o passe longo em linha reta com força.", "A bola deve chegar à frente do corredor.", "Pratique passes de 20+ metros."] },
      { id: "pas_14", title: "14. Treino de Passe na Parede com Duas Bolas", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[13],
        desc: "Exercício avançado usando duas bolas contra a parede para desenvolver coordenação bilateral e velocidade nas mãos.",
        steps: ["Posicione-se a 2m da parede com duas bolas.", "Passe uma bola com a direita e outra com a esquerda alternadamente.", "Mantenha ritmo constante sem deixar bolas caírem.", "Aumente a velocidade progressivamente.", "Faça 3 séries de 30 segundos."] },
      { id: "pas_15", title: "15. Passe com Efeito Lateral", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[14],
        desc: "Adicione efeito lateral à bola para contornar defensores e fazer passes criativos que mudam de direção.",
        steps: ["Segure a bola normalmente para o passe.", "Ao soltar, aplique rotação lateral com os dedos.", "A bola deve curvar ao redor do defensor.", "Pratique o efeito em passes de peito e quicados.", "Use em situações de tráfego pesado no garrafão."] },
      { id: "pas_16", title: "16. Passe Rápido em Círculo (Team Drill)", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[15],
        desc: "Drill de equipe onde jogadores em círculo passam a bola em velocidade crescente, desenvolvendo reflexos e trabalho coletivo.",
        steps: ["Forme um círculo com 4-6 jogadores.", "Passe a bola rapidamente ao redor do círculo.", "Varie a direção aleatoriamente.", "Adicione uma segunda bola para dificuldade extra.", "Quem deixar cair faz 5 flexões."] },
      { id: "pas_17", title: "17. Passe Quicado sob o Defensor", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[16],
        desc: "Aprimore o passe quicado especificamente para passar por baixo dos braços estendidos dos defensores no garrafão.",
        steps: ["Posicione um defensor (ou cone) entre você e o alvo.", "Observe a posição dos braços do defensor.", "Lance o passe quicado por baixo dos braços.", "A bola deve quicar próximo ao defensor.", "Varie ângulos e velocidade do passe."] },
      { id: "pas_18", title: "18. Passe de Vôlei (Tap Pass)", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[17],
        desc: "Passe rápido de toque (tap pass) onde a bola é redirecionada no ar sem ser segurada, mantendo velocidade máxima.",
        steps: ["Receba o passe sem agarrar a bola.", "Redirecione a bola com um toque dos dedos.", "Mantenha a bola em movimento sem segurá-la.", "O toque deve direcionar para o companheiro.", "Pratique primeiro parado, depois em movimento."] },
      { id: "pas_19", title: "19. Passe de Entrada de Garrafão", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[18],
        desc: "Passes para alimentar jogadores dentro do garrafão, uma habilidade crucial para armadores que precisam servir os pivôs.",
        steps: ["Posicione-se no topo do garrafão ou na ala.", "Identifique o companheiro pedindo bola no poste.", "Use finta de corpo para abrir ângulo de passe.", "Passe firme e direto no espaço entre defensores.", "Varie entre passe de peito, quicado e overhead."] },
      { id: "pas_20", title: "20. Passe Lateral Desequilibrado", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[19],
        desc: "Pratique passes em situações de desequilíbrio corporal, preparando-se para momentos caóticos dentro do jogo.",
        steps: ["Corra ou drible em velocidade.", "Ao ser forçado para fora de equilíbrio, passe.", "Mantenha precisão mesmo com o corpo inclinado.", "Use core forte para estabilizar durante o passe.", "Pratique caindo e passando simultaneamente."] },
      { id: "pas_21", title: "21. Passe Rápido de Transição", difficulty: "Intermediário", duration: "10 min", youtubeId: passingVideos[20],
        desc: "Passes rápidos durante transições de defesa para ataque, priorizando velocidade e decisão correta.",
        steps: ["Após rebote ou roubo, olhe para frente.", "Identifique o companheiro mais aberto em transição.", "Faça o passe em até 2 segundos.", "Priorize passes simples e diretos.", "Corra para se reposicionar após o passe."] },
      { id: "pas_22", title: "22. Passe Pós-Penetração (Kickout Pass)", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[21],
        desc: "O kickout pass após penetração é uma das jogadas mais eficientes do basquete moderno. Penetre e chute para o arremessador.",
        steps: ["Penetre driblando em direção ao garrafão.", "Atraia a ajuda defensiva.", "Identifique o arremessador livre na linha de 3.", "Passe rapidamente para fora (kickout).", "O arremessador deve estar preparado para catch and shoot."] },
      { id: "pas_23", title: "23. Passe com Dificuldade de Visão Periférica", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[22],
        desc: "Exercícios para desenvolver visão periférica e capacidade de ver toda a quadra enquanto faz passes precisos.",
        steps: ["Olhe fixamente para um ponto à frente.", "Identifique companheiros na visão periférica.", "Passe para eles sem virar a cabeça.", "Aumente a dificuldade com mais jogadores.", "Treine com óculos de bloqueio de visão inferior."] },
      { id: "pas_24", title: "24. Passe de Lóbulo sobre Defesa", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[23],
        desc: "Passes altos (lob passes) por cima da defesa para companheiros no garrafão, essencial para alley-oops e feeds no poste.",
        steps: ["Identifique companheiro mais alto que o defensor.", "Lance a bola em arco alto sobre a defesa.", "A bola deve chegar onde só seu companheiro alcance.", "Use este passe para alley-oops e feed no poste alto.", "Pratique o timing com o movimento do receptor."] },
      { id: "pas_25", title: "25. Passe Rápido de Toque Único", difficulty: "Avançado", duration: "12 min", youtubeId: passingVideos[24],
        desc: "Receba e passe em um único toque sem segurar a bola, mantendo velocidade máxima na movimentação da equipe.",
        steps: ["Posicione-se para receber o passe.", "Ao receber, redirecione imediatamente para outro.", "Não segure a bola em nenhum momento.", "O toque deve ser suave e direcionado.", "Pratique em triângulos com 3 jogadores."] }
    ]
  },
  {
    id: "drible",
    title: "Drible e Controle de Bola",
    emoji: "👟",
    exercises: [
      { id: "dri_1", title: "1. Drible de Controle Baixo", difficulty: "Iniciante", duration: "10 min", youtubeId: dribblingVideos[0],
        desc: "Fundamento essencial: drible baixo e controlado usando a ponta dos dedos para manter a posse contra defensores agressivos.",
        steps: ["Adote postura baixa com joelhos flexionados.", "Drible a bola na altura dos joelhos.", "Use apenas a ponta dos dedos, nunca a palma.", "Mantenha os olhos para frente, não para a bola.", "Pratique 30 segundos com cada mão."] },
      { id: "dri_2", title: "2. Drible de Proteção com Braço Oposto", difficulty: "Iniciante", duration: "10 min", youtubeId: dribblingVideos[1],
        desc: "Aprenda a proteger a bola usando o braço livre como escudo contra o defensor, sem cometer falta.",
        steps: ["Drible com a mão dominante.", "Estenda o braço oposto na direção do defensor.", "O braço não empurra - apenas bloqueia.", "Mantenha o corpo entre o defensor e a bola.", "Pratique driblando ao redor de cones."] },
      { id: "dri_3", title: "3. Crossover Estático", difficulty: "Iniciante", duration: "10 min", youtubeId: dribblingVideos[2],
        desc: "O crossover básico parado: troque a bola de mão rapidamente na frente do corpo para confundir o defensor.",
        steps: ["Drible normalmente com a mão direita.", "Com um toque rápido, cruze a bola para a esquerda.", "A bola deve cruzar baixa e rápida.", "Empurre a bola com ângulo, não só para o lado.", "Alterne: direita-esquerda-direita continuamente."] },
      { id: "dri_4", title: "4. Drible entre as Pernas Estático", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[3],
        desc: "Passe a bola entre as pernas parado para desenvolver coordenação e preparar movimentos mais avançados em velocidade.",
        steps: ["Posicione um pé à frente do outro.", "Drible a bola entre as pernas por baixo.", "A bola passa da mão de trás para a de frente.", "Mantenha ritmo constante e controlado.", "Troque o pé da frente e repita."] },
      { id: "dri_5", title: "5. Drible por Trás das Costas Básico", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[4],
        desc: "O wrap-around dribble: passe a bola por trás das costas para mudar de mão sem expor a bola ao defensor.",
        steps: ["Drible com a mão direita.", "Com um movimento enrolado, passe atrás das costas.", "A bola deve chegar na mão esquerda.", "Use o pulso para direcionar, não o braço inteiro.", "Comece devagar e aumente a velocidade."] },
      { id: "dri_6", title: "6. In-and-Out Dribble", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[5],
        desc: "O in-and-out é uma finta de crossover: finja que vai cruzar mas continue com a mesma mão para enganar o defensor.",
        steps: ["Drible normalmente com uma mão.", "Finja um crossover movendo a bola para dentro.", "No último instante, puxe de volta para fora.", "O defensor reage ao crossover falso.", "Ataque no espaço criado pela finta."] },
      { id: "dri_7", title: "7. Crossover em Movimento", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[6],
        desc: "Execute crossovers enquanto avança pela quadra, combinando troca de mão com mudança de direção em velocidade.",
        steps: ["Drible em velocidade moderada.", "Execute crossover no ritmo do passo.", "Mude de direção ao cruzar a bola.", "Acelere após o crossover para atacar.", "Pratique em linha reta e depois em zigue-zague."] },
      { id: "dri_8", title: "8. Drible em Zigue-zague entre Cones", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[7],
        desc: "Percurso de cones em zigue-zague driblando para desenvolver controle de bola em mudanças rápidas de direção.",
        steps: ["Monte cones em zigue-zague com 2m de distância.", "Drible em velocidade entre os cones.", "Use crossover em cada cone para mudar direção.", "Mantenha o drible baixo durante as mudanças.", "Cronometre e tente melhorar a cada vez."] },
      { id: "dri_9", title: "9. Drible com Duas Bolas Simultâneas", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[8],
        desc: "Drible duas bolas ao mesmo tempo para acelerar o desenvolvimento do controle e força de ambas as mãos.",
        steps: ["Segure uma bola em cada mão.", "Drible as duas bolas ao mesmo tempo (sync).", "Mantenha altura igual em ambas.", "Depois alterne: uma sobe enquanto outra desce.", "Pratique andando pela quadra com duas bolas."] },
      { id: "dri_10", title: "10. Drible com Duas Bolas Alternadas", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[9],
        desc: "Versão alternada do drible com duas bolas: uma mão dribla enquanto a outra recolhe, desenvolvendo independência das mãos.",
        steps: ["Segure uma bola em cada mão.", "Drible alternando: quando uma desce a outra sobe.", "Mantenha ritmo constante sem perder o controle.", "Adicione caminhada progressivamente.", "Pratique por 1 minuto contínuo sem erros."] },
      { id: "dri_11", title: "11. Drible de Bolso (Pocket Dribble)", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[10],
        desc: "O pocket dribble é usado para criar espaço rapidamente puxando a bola para o lado do corpo como um pistoleiro sacando a arma.",
        steps: ["Drible em velocidade em direção ao defensor.", "Puxe a bola rapidamente para o lado do corpo.", "A bola fica no 'bolso' da mão por um instante.", "Exploda na direção oposta com a bola.", "Use para criar separação rápida do defensor."] },
      { id: "dri_12", title: "12. Drible com Bola de Tênis (Coordenação)", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[11],
        desc: "Drible de basquete com uma mão enquanto lança e pega bola de tênis com a outra, desenvolvendo coordenação elite.",
        steps: ["Drible a bola de basquete com a mão dominante.", "Com a outra mão, lance uma bola de tênis para cima.", "Pegue a bola de tênis sem parar de driblar.", "Aumente a frequência dos lançamentos.", "Troque de mão: drible com a mão fraca."] },
      { id: "dri_13", title: "13. Hesitation Move (Hesitação)", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[12],
        desc: "O hesitation é uma pausa falsa no drible para fazer o defensor hesitar, criando oportunidade de acelerar e atacar.",
        steps: ["Drible em velocidade em direção ao defensor.", "Pare repentinamente como se fosse arremessar.", "Quando o defensor hesita, acelere explosivamente.", "A chave é a mudança de ritmo: rápido-parado-rápido.", "Pratique com diferentes velocidades iniciais."] },
      { id: "dri_14", title: "14. Drible com Mudança de Ritmo", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[13],
        desc: "Alterne entre drible lento e rápido para confundir o defensor com mudanças imprevisíveis de velocidade.",
        steps: ["Drible em velocidade lenta e controlada.", "Sem aviso, acelere explosivamente.", "Mantenha velocidade alta por 2-3 dribles.", "Desacelere repentinamente.", "O defensor nunca deve prever sua velocidade."] },
      { id: "dri_15", title: "15. Drible de Recuo contra Pressão", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[14],
        desc: "Quando o defensor aplica pressão total, use o drible de recuo para manter distância e controle da situação.",
        steps: ["Drible em direção ao defensor.", "Quando ele avança, recue driblando.", "Mantenha o corpo entre o defensor e a bola.", "Use o braço livre para medir a distância.", "Nunca perca o controle do drible durante o recuo."] },
      { id: "dri_16", title: "16. Spin Move (Giro)", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[15],
        desc: "O spin move: giro de 360° com drible para ultrapassar o defensor. Requer timing perfeito e proteção da bola.",
        steps: ["Drible em direção ao defensor.", "Plante o pé da frente ao lado do defensor.", "Gire 360° usando esse pé como pivô.", "Troque a bola de mão durante o giro.", "Acelere na saída do giro para atacar."] },
      { id: "dri_17", title: "17. Drible em 8 entre as Pernas", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[16],
        desc: "O figure-8 dribble: passe a bola em formato de 8 entre as pernas continuamente para domínio total do ball handling.",
        steps: ["Abra as pernas na largura dos ombros.", "Drible a bola da frente para trás entre a perna direita.", "Cruze por trás e passe pela perna esquerda.", "A bola faz um padrão de 8 entre as pernas.", "Aumente a velocidade mantendo controle."] },
      { id: "dri_18", title: "18. Drible Baixo Estilo Aranha", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[17],
        desc: "O spider dribble: bola no chão entre as pernas alternando mãos rapidamente, desenvolvendo toque ultra-rápido.",
        steps: ["Abra as pernas com os joelhos flexionados.", "Drible a bola muito baixa entre as pernas.", "Alterne: direita-frente, esquerda-frente, direita-trás, esquerda-trás.", "Cada toque é com uma mão diferente em posição diferente.", "Mantenha ritmo constante por 30 segundos."] },
      { id: "dri_19", title: "19. Drible Cruzado com Ataque ao Garrafão", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[18],
        desc: "Combine crossover com penetração decisiva ao garrafão, usando a mudança de direção para ultrapassar o defensor e finalizar.",
        steps: ["Drible na ala a 45 graus da cesta.", "Execute crossover forte e baixo.", "Ataque imediatamente ao garrafão.", "Mantenha drible baixo durante a penetração.", "Finalize com bandeja ou floater."] },
      { id: "dri_20", title: "20. Drible de Proteção Avançando de Costas", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[19],
        desc: "Drible avançando de costas para o defensor para proteger a bola e manter controle enquanto busca opções de jogo.",
        steps: ["Receba a bola de costas para a cesta.", "Drible protegendo com o corpo.", "Use o braço livre como sensor de distância.", "Avance driblando de costas em direção ao garrafão.", "Ao sentir o defensor, gire e ataque."] },
      { id: "dri_21", title: "21. Drible de Velocidade de Quadra Inteira", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[20],
        desc: "Sprint de ponta a ponta da quadra driblando em velocidade máxima, focando em manter controle durante a corrida.",
        steps: ["Posicione-se na linha de fundo.", "Sprinte até a outra linha de fundo driblando.", "Empurre a bola à frente com toques longos.", "Mantenha a bola na frente e ao lado do corpo.", "Cronometre e busque melhorar a cada repetição."] },
      { id: "dri_22", title: "22. Crossover Duplo Explosivo", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[21],
        desc: "Duas trocas de mão rápidas seguidas (double crossover) para confundir completamente o defensor e criar espaço.",
        steps: ["Drible em velocidade moderada.", "Execute crossover rápido para a esquerda.", "Imediatamente execute outro crossover de volta para a direita.", "O defensor se perde com a dupla troca.", "Ataque na direção final com aceleração máxima."] },
      { id: "dri_23", title: "23. Drible Combinado (Cross, Between, Behind)", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[22],
        desc: "Combine crossover, entre as pernas e por trás das costas em sequência fluida para ter arsenal completo de movimentos.",
        steps: ["Execute crossover para a esquerda.", "Imediatamente passe entre as pernas para a direita.", "Finalize com drible por trás das costas.", "Toda a sequência deve ser fluida e rápida.", "Pratique até ser automático em ambas direções."] },
      { id: "dri_24", title: "24. Drible Deslizado Lateral", difficulty: "Intermediário", duration: "12 min", youtubeId: dribblingVideos[23],
        desc: "Drible se movimentando lateralmente para criar ângulos de ataque e encontrar brechas na defesa.",
        steps: ["Drible movendo-se lateralmente ao longo da linha de 3.", "Mantenha postura baixa e equilibrada.", "Os pés não cruzam: deslize mantendo base.", "Proteja a bola com o corpo.", "Pratique em ambas as direções."] },
      { id: "dri_25", title: "25. Controle de Bola Cegando a Visão", difficulty: "Avançado", duration: "14 min", youtubeId: dribblingVideos[24],
        desc: "Drible sem olhar para a bola usando óculos ou fita limitando a visão inferior, forçando controle puramente pelo toque.",
        steps: ["Use óculos de treino ou limite a visão inferior.", "Drible normalmente sem poder ver a bola.", "O toque dos dedos é sua única referência.", "Execute crossovers e entre as pernas sem visão.", "Quando remover o limitador, sentirá diferença enorme."] }
    ]
  },
  {
    id: "velocidade",
    title: "Velocidade e Agilidade",
    emoji: "⚡",
    exercises: [
      { id: "vel_1", title: "1. Escada de Agilidade - Toques Rápidos", difficulty: "Iniciante", duration: "8 min", youtubeId: speedAgilityVideos[0],
        desc: "Use escada de agilidade para desenvolver pés rápidos com toques em cada espaço, fundamento de toda movimentação no basquete.",
        steps: ["Posicione a escada de agilidade no chão.", "Corra colocando um pé em cada espaço.", "Mantenha os joelhos elevados e passos curtos.", "Use a ponta dos pés, nunca o calcanhar.", "Aumente a velocidade mantendo precisão."] },
      { id: "vel_2", title: "2. Arrancada e Parada Explosiva (Closeout)", difficulty: "Iniciante", duration: "8 min", youtubeId: speedAgilityVideos[1],
        desc: "Pratique o closeout defensivo: sprint seguido de parada controlada com postura baixa para contestar arremessos.",
        steps: ["Posicione-se a 5-6 metros de um cone.", "Sprinte em velocidade máxima até o cone.", "Pare controladamente com passos curtos.", "Adote postura defensiva imediatamente.", "Mão alta para contestar arremesso simulado."] },
      { id: "vel_3", title: "3. Mudança de Direção com Cones", difficulty: "Intermediário", duration: "12 min", youtubeId: speedAgilityVideos[2],
        desc: "Corra entre cones mudando de direção explosivamente, simulando cortes e mudanças rápidas durante o jogo.",
        steps: ["Monte 5 cones em padrão aleatório.", "Corra até cada cone e mude de direção bruscamente.", "Plante o pé externo para mudar de direção.", "Mantenha o centro de gravidade baixo.", "Complete o circuito cronometrando."] },
      { id: "vel_4", title: "4. Deslocamento Lateral com Toque de Chão", difficulty: "Intermediário", duration: "12 min", youtubeId: speedAgilityVideos[3],
        desc: "Slides laterais tocando o chão em cada extremidade para desenvolver velocidade lateral e resistência nas pernas.",
        steps: ["Posicione-se entre duas linhas com 4-5m de distância.", "Deslize lateralmente até uma linha.", "Toque o chão com a mão ao chegar.", "Deslize de volta para a outra linha.", "Complete 10 toques em cada lado sem parar."] },
      { id: "vel_5", title: "5. Drop Step de Reação Rápida", difficulty: "Intermediário", duration: "12 min", youtubeId: speedAgilityVideos[4],
        desc: "Treine o drop step reativo: ao sinal, gire o pé e arranque na direção indicada o mais rápido possível.",
        steps: ["Adote postura defensiva básica.", "Ao sinal (visual ou sonoro), reaja.", "Execute drop step: gire o pé e arranque.", "Cubra 3-4 metros na direção correta.", "O tempo de reação é mais importante que a velocidade."] },
      { id: "vel_6", title: "6. Sprint em Curva na Linha de 3", difficulty: "Intermediário", duration: "12 min", youtubeId: speedAgilityVideos[5],
        desc: "Sprints seguindo a curvatura da linha de 3 pontos para desenvolver corrida em curva e equilíbrio lateral.",
        steps: ["Posicione-se em um canto da linha de 3.", "Sprinte seguindo a curvatura da linha.", "Incline o corpo para dentro da curva.", "Mantenha velocidade constante na curva.", "Complete o arco de canto a canto."] },
      { id: "vel_7", title: "7. Salto e Arrancada na Quadra de Defesa", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[6],
        desc: "Combine salto vertical com sprint subsequente para simular rebotes seguidos de contra-ataques.",
        steps: ["Salte verticalmente com máxima potência.", "Ao aterrissar, imediatamente arranque em sprint.", "Cubra 10 metros em velocidade máxima.", "Caminhe de volta e repita.", "Complete 8 repetições com foco na transição."] },
      { id: "vel_8", title: "8. Deslocamento em X", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[7],
        desc: "Movimentação em padrão X combinando sprints frontais, diagonais e slides laterais para agilidade multidirecional.",
        steps: ["Monte cones formando um X grande.", "Sprint frontal até o centro.", "Slide lateral até o cone da direita.", "Backpedal até o cone de trás.", "Sprint diagonal até o cone oposto. Repita."] },
      { id: "vel_9", title: "9. Reação ao Apito - Corrida de Contra-Ataque", difficulty: "Intermediário", duration: "8 min", youtubeId: speedAgilityVideos[8],
        desc: "Ao ouvir o apito, reaja imediatamente e arranque em sprint de contra-ataque, treinando tempo de reação e explosão.",
        steps: ["Posicione-se na linha de fundo em postura defensiva.", "Ao apito, gire e arranque em sprint.", "Corra até a outra cesta em velocidade máxima.", "Volte trotando e espere o próximo apito.", "O foco é no tempo de reação ao estímulo."] },
      { id: "vel_10", title: "10. Treino de Pés Rápidos no Garrafão", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[9],
        desc: "Pés rápidos dentro do garrafão: movimentos curtos e explosivos que simulam as disputas dentro da área pintada.",
        steps: ["Posicione-se dentro do garrafão.", "Execute toques rápidos de pé alternados.", "Mantenha postura baixa e joelhos flexionados.", "Mude de direção a cada 3-4 passos.", "Mantenha por 30 segundos, descanse 15s, repita 6x."] },
      { id: "vel_11", title: "11. Passada Cruzada Lateral (Cross-step)", difficulty: "Intermediário", duration: "8 min", youtubeId: speedAgilityVideos[10],
        desc: "O cross-step é essencial para pivôs: cruzar uma perna sobre a outra para ganhar posição ou mudar de direção rapidamente.",
        steps: ["Adote postura defensiva.", "Cruze a perna direita sobre a esquerda.", "Gire o quadril e corra na nova direção.", "Use esta técnica para perseguir dribladores rápidos.", "Pratique cross-steps para ambos os lados."] },
      { id: "vel_12", title: "12. Corrida de Recuperação Traseira", difficulty: "Intermediário", duration: "12 min", youtubeId: speedAgilityVideos[11],
        desc: "Corrida de costas (backpedal) em velocidade para recuperar posição defensiva após ser ultrapassado pelo atacante.",
        steps: ["Corra de costas pela extensão da quadra.", "Mantenha o peso na ponta dos pés.", "Olhe sobre o ombro periodicamente.", "Não cruze os pés - dê passos alternados.", "Cronometre e tente melhorar a cada vez."] },
      { id: "vel_13", title: "13. Agilidade de Pés com Duas Bolas de Drible", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[12],
        desc: "Combine exercícios de pés rápidos na escada com drible de duas bolas simultaneamente para coordenação máxima.",
        steps: ["Use escada de agilidade com duas bolas de basquete.", "Drible ambas enquanto faz footwork na escada.", "Cada pé entra em cada espaço da escada.", "As mãos driblam independentemente.", "Comece devagar e aumente velocidade gradualmente."] },
      { id: "vel_14", title: "14. Agachamento e Salto Explosivo Lateral", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[13],
        desc: "Agachamentos seguidos de saltos laterais explosivos para desenvolver potência lateral usada em defesa e ataques.",
        steps: ["Faça um agachamento profundo.", "Exploda lateralmente saltando para o lado.", "Aterrisse em agachamento no lado oposto.", "Repita saltando de volta.", "Faça 3 séries de 10 saltos por lado."] },
      { id: "vel_15", title: "15. Finta de Corpo sem Bola", difficulty: "Intermediário", duration: "8 min", youtubeId: speedAgilityVideos[14],
        desc: "Pratique fintas de corpo sem bola para se desvencilhar de defensores e ficar livre para receber passes.",
        steps: ["Finja ir em uma direção com o corpo.", "Plante o pé e corte na direção oposta.", "Use ombros e olhos para vender a finta.", "A mudança de direção deve ser explosiva.", "Pratique V-cuts, L-cuts e backdoor cuts."] },
      { id: "vel_16", title: "16. Sprint com Parada em Um Tempo", difficulty: "Intermediário", duration: "8 min", youtubeId: speedAgilityVideos[15],
        desc: "Sprints com parada em um tempo (jump stop): pare saltando com os dois pés simultaneamente para manter equilíbrio.",
        steps: ["Sprinte em velocidade alta.", "Pare com salto aterrissando nos dois pés.", "Mantenha equilíbrio perfeito na parada.", "Pode usar qualquer pé como pivô.", "Pratique parando em diferentes velocidades."] },
      { id: "vel_17", title: "17. Sprint com Parada em Dois Tempos", difficulty: "Intermediário", duration: "12 min", youtubeId: speedAgilityVideos[16],
        desc: "Sprints com parada em dois tempos (stride stop): pare com um pé depois o outro, estabelecendo o pivô automaticamente.",
        steps: ["Sprinte em velocidade alta.", "Pare com um pé tocando primeiro, depois o outro.", "O primeiro pé a tocar é o pivô.", "Mantenha controle e equilíbrio na parada.", "Pratique alternando qual pé toca primeiro."] },
      { id: "vel_18", title: "18. Deslocamento Defensivo Diagonal", difficulty: "Intermediário", duration: "12 min", youtubeId: speedAgilityVideos[17],
        desc: "Slides defensivos em ângulos diagonais para praticar seguir dribladores que atacam em ângulos variados.",
        steps: ["Adote postura defensiva.", "Deslize em diagonal para frente-direita.", "Toque a linha e deslize para frente-esquerda.", "Forme um padrão de zigue-zague defensivo.", "Mantenha mãos ativas durante todo deslocamento."] },
      { id: "vel_19", title: "19. Corrida com Bloqueio de Linha de Passe", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[18],
        desc: "Sprints reativos para interceptar linhas de passe, combinando leitura do jogo com velocidade de deslocamento.",
        steps: ["Posicione-se em postura defensiva off-ball.", "Quando o passe for simulado, arranque para interceptar.", "Corra em direção à linha de passe.", "Mantenha os braços ativos para deflexão.", "Foque no timing e ângulo de interceptação."] },
      { id: "vel_20", title: "20. Treino de Reação com Bola de Reação", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[19],
        desc: "Use bola de reação (irregular) que quica em direções imprevisíveis para treinar reflexos e agilidade reativa.",
        steps: ["Lance a bola de reação no chão.", "Reaja rapidamente à direção do quique.", "Capture a bola antes do segundo quique.", "Varie a força e ângulo do lançamento.", "Pratique com ambas as mãos."] },
      { id: "vel_21", title: "21. Agilidade com Resistência Elástica", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[20],
        desc: "Use faixas elásticas durante exercícios de agilidade para adicionar resistência e desenvolver potência extra nos movimentos.",
        steps: ["Prenda o elástico na cintura.", "Execute slides defensivos contra a resistência.", "Faça sprints curtos com o elástico.", "Execute mudanças de direção.", "Ao remover o elástico, sentirá muito mais velocidade."] },
      { id: "vel_22", title: "22. Agilidade entre Cones em Formato de T", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[21],
        desc: "O T-Drill clássico: sprint, slide lateral, slide na direção oposta e backpedal formando um T para agilidade completa.",
        steps: ["Monte 4 cones formando um T.", "Sprinte do cone base até o topo do T.", "Slide lateral para o cone da direita.", "Slide para o cone da esquerda.", "Backpedal de volta ao cone base."] },
      { id: "vel_23", title: "23. Deslocamento Cruzado Rápido com Giro", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[22],
        desc: "Cross-steps rápidos seguidos de giros de 180° para simular movimentos defensivos complexos contra atacantes rápidos.",
        steps: ["Execute cross-step para a direita.", "Após 3-4 passos, gire 180° e continue.", "Mantenha postura baixa durante todo movimento.", "Mude de direção ao sinal ou ao apito.", "Pratique transições fluidas entre direções."] },
      { id: "vel_24", title: "24. Treino de Pés em Escada com Drible", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[23],
        desc: "Footwork na escada de agilidade enquanto dribla a bola, combinando coordenação de pés e mãos no nível mais alto.",
        steps: ["Posicione a escada de agilidade.", "Drible a bola com uma mão.", "Execute padrões de pés na escada.", "Mantenha o drible controlado durante todo exercício.", "Troque de mão e repita com padrão diferente."] },
      { id: "vel_25", title: "25. Deslocamento com Salto Vertical para Toco", difficulty: "Avançado", duration: "12 min", youtubeId: speedAgilityVideos[24],
        desc: "Combine deslocamento defensivo com salto vertical para bloquear arremessos, treinando timing e explosão de toco.",
        steps: ["Deslize defensivamente por 3-4 metros.", "Ao sinal, salte verticalmente estendendo os braços.", "Simule o bloqueio de arremesso.", "Aterrisse e continue deslizando.", "Repita 8 vezes por série, 3 séries."] }
    ]
  },
  {
    id: "defesa",
    title: "Sistemas de Defesa",
    emoji: "🛡️",
    exercises: [
      { id: "def_1", title: "1. Postura Defensiva Básica (Stance)", difficulty: "Iniciante", duration: "10 min", youtubeId: defenseVideos[0],
        desc: "Aprenda a postura defensiva fundamental: pés, mãos, quadril e olhos na posição correta para defender qualquer jogador.",
        steps: ["Abra os pés na largura dos ombros ou um pouco mais.", "Flexione os joelhos mantendo o quadril baixo.", "Coloque o peso na planta dos pés (calcanhares leves).", "Mãos ativas: uma na bola, outra na linha de passe.", "Mantenha os olhos no peito do atacante, não na bola."] },
      { id: "def_2", title: "2. Deslocamento de Ajuda Defensiva (Help Side)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[1],
        desc: "Entenda o conceito de ajuda defensiva: como se posicionar quando seu homem não tem a bola para ajudar companheiros.",
        steps: ["Posicione-se entre seu marcador e a cesta.", "Quando a bola estiver no lado oposto, flutue para o garrafão.", "Mantenha visão da bola E do seu marcador.", "Ao ouvir pedido de ajuda, deslize para a zona de ajuda.", "Recupere para seu marcador quando a bola voltar."] },
      { id: "def_3", title: "3. Marcação Pressão Quadra Inteira", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[2],
        desc: "Técnicas de marcação pressionante em toda a quadra para forçar erros do adversário e criar oportunidades de roubo de bola.",
        steps: ["Pressione o inbound pass do adversário.", "Mantenha corpo a corpo durante toda a subida de bola.", "Force o driblador para a lateral da quadra.", "Use o sideline como defensor extra.", "Comunique com companheiros para armadilhas."] },
      { id: "def_4", title: "4. Contestação de Arremesso Correta (Closeout)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[3],
        desc: "Aprenda o closeout: como correr até o arremessador e contestar o arremesso sem cometer falta ou ser ultrapassado.",
        steps: ["Sprint até 2/3 da distância até o arremessador.", "Desacelere com passos curtos e rápidos.", "Adote postura baixa com mão alta.", "Não salte - apenas estenda o braço.", "Esteja preparado para o atacante driblar."] },
      { id: "def_5", title: "5. Navegação por Cima de Bloqueio (Over Screen)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[4],
        desc: "Como passar por cima de bloqueios ofensivos sem perder seu marcador, especialmente contra arremessadores bons de 3.",
        steps: ["Antecipe o bloqueio gritando a informação.", "Ao encontrar o bloqueio, passe por cima dele.", "Encoste no bloqueador para diminuir o espaço.", "Recupere rapidamente até seu marcador.", "Use esta técnica contra arremessadores perigosos."] },
      { id: "def_6", title: "6. Navegação por Baixo de Bloqueio (Under Screen)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[5],
        desc: "Passe por baixo do bloqueio quando o atacante não é um bom arremessador, concedendo espaço mas mantendo posição.",
        steps: ["Ao ver o bloqueio chegando, comunique.", "Dê um passo para trás do bloqueador.", "Passe por baixo (entre o bloqueador e a cesta).", "Recupere a posição na frente do atacante.", "Use contra jogadores que preferem penetrar."] },
      { id: "def_7", title: "7. Defesa de Poste Baixo (Post Defense)", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[6],
        desc: "Técnicas para defender jogadores no poste baixo: posicionamento, negação de recepção e contenção de movimentos.",
        steps: ["Posicione-se do lado da bola (3/4 frontal).", "Use o antebraço para sentir o pivô.", "Negue a recepção fácil da bola.", "Se receber, mantenha posição e conteste.", "Force o pivô para o lado da base, longe do aro."] },
      { id: "def_8", title: "8. Antecipação de Linha de Passe (Deny)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[7],
        desc: "Posicione-se na linha de passe para negar que seu marcador receba a bola, especialmente nas posições de ala.",
        steps: ["Posicione um pé e uma mão na linha de passe.", "Mantenha visão da bola e do seu marcador.", "O braço na linha de passe deve estar ativo.", "Se o atacante cortar backdoor, reaja.", "Varie entre deny completo e posição de ajuda."] },
      { id: "def_9", title: "9. Box Out Defensivo (Corta-Luz de Rebote)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[8],
        desc: "A técnica de box out para garantir posição no rebote defensivo, bloqueando o atacante longe da cesta.",
        steps: ["Ao arremesso adversário, localize seu marcador.", "Gire e coloque o corpo entre ele e a cesta.", "Abra os braços para ocupar espaço.", "Mantenha contato físico empurrando com o quadril.", "Quando a bola quicar, salte para pegar o rebote."] },
      { id: "def_10", title: "10. Recuperação após Finta de Drible", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[9],
        desc: "Quando o atacante te finta e você morde, aprenda a recuperar posição defensiva rapidamente sem cometer falta.",
        steps: ["Se cair na finta, não entre em pânico.", "Use passos laterais rápidos para recuperar.", "Não estenda os braços (evite falta).", "Mantenha o corpo entre o atacante e a cesta.", "Force o atacante para uma posição difícil."] },
      { id: "def_11", title: "11. Rotação Defensiva em Equipe", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[10],
        desc: "Entenda como a defesa rotaciona em equipe quando um jogador é driblado, criando ajudas e recuperações coletivas.",
        steps: ["Quando o driblador passa seu defensor, X2 ajuda.", "X3 rotaciona para cobrir o homem de X2.", "X4 rotaciona para cobrir o de X3.", "Após o passe, todos recuperam seus marcadores.", "A comunicação é ESSENCIAL em cada rotação."] },
      { id: "def_12", title: "12. Posicionamento Ice no Pick & Roll", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[11],
        desc: "A defesa Ice no pick and roll: force o driblador para a lateral e negue o uso do bloqueio pelo lado forte.",
        steps: ["O defensor do driblador se posiciona forçando para a lateral.", "Nega o uso do bloqueio empurrando para a baseline.", "O defensor do bloqueador se recua protegendo o aro.", "A ideia é isolar o driblador no canto.", "O sideline funciona como defensor extra."] },
      { id: "def_13", title: "13. Defesa de Contra-Ataque (1 contra 2)", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[12],
        desc: "Como defender sozinho contra dois atacantes em contra-ataque, retardando a jogada até a ajuda chegar.",
        steps: ["Recue rapidamente para a frente do aro.", "Fique no meio entre os dois atacantes.", "Force o driblador a parar ou desacelerar.", "Não comprometa em um atacante até o passe.", "Ganhe tempo para seus companheiros voltarem."] },
      { id: "def_14", title: "14. Foco e Pressão no Driblador", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[13],
        desc: "Técnicas para pressionar o driblador sem ser ultrapassado: posicionamento, distância e leitura de movimentos.",
        steps: ["Mantenha distância de um braço do driblador.", "Olhe para o peito/cintura, não para a bola.", "Force o driblador para a mão fraca.", "Use pés ativos, nunca estenda para roubar.", "Mantenha pressão consistente sem se comprometer."] },
      { id: "def_15", title: "15. Desvio de Bloqueio Cego", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[14],
        desc: "Reaja a bloqueios cegos (back screens) que chegam sem aviso, usando comunicação da equipe e instinto defensivo.",
        steps: ["Mantenha consciência de onde estão todos os jogadores.", "Companheiros devem gritar: 'Tela! Tela!'", "Ao sentir o bloqueio, desvie rapidamente.", "Abaixe o ombro e passe pelo bloqueio.", "Recupere posição defensiva em seu marcador."] },
      { id: "def_16", title: "16. Postura de Mãos Ativas para Roubo", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[15],
        desc: "Aprenda a manter as mãos ativas para deflexões e roubos de bola sem cometer faltas desnecessárias.",
        steps: ["Mantenha as mãos sempre em movimento.", "Uma mão na bola, outra na linha de passe.", "Dê tapas para cima na bola, não para baixo.", "Antecipe passes descuidados do adversário.", "Nunca alcance com o corpo - use apenas os braços."] },
      { id: "def_17", title: "17. Carga de Defensor (Ganhar Faltas)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[16],
        desc: "Técnica para tomar cargas ofensivas: posicione-se corretamente e absorva o contato para ganhar a posse de bola.",
        steps: ["Antecipe para onde o driblador vai atacar.", "Posicione-se ANTES do atacante chegar (pés plantados).", "Mantenha o corpo ereto com as mãos no peito.", "Absorva o contato e caia controladamente.", "Os pés devem estar fora do semicírculo do garrafão."] },
      { id: "def_18", title: "18. Comunicação Defensiva (Drill Falado)", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[17],
        desc: "Treine a comunicação verbal essencial na defesa: avisos de tela, ajuda, rotação e posicionamento.",
        steps: ["Pratique gritar: 'Tela direita!', 'Tela esquerda!'", "Avise: 'Ajuda!', 'Volta!', 'Fecha o meio!'", "Comunique cortes backdoor: 'Cuidado, cortou!'", "Fale o número do arremessador livre.", "A comunicação deve ser CONSTANTE, não apenas no momento."] },
      { id: "def_19", title: "19. Marcação de Linha de Três Pontos", difficulty: "Intermediário", duration: "12 min", youtubeId: defenseVideos[18],
        desc: "Técnicas específicas para defender arremessadores de 3 pontos: distância, closeout e negação de recepção.",
        steps: ["Contra bons arremessadores, fique mais perto.", "Ao closeout, mão alta e passos curtos.", "Negue a recepção na linha de 3 quando possível.", "Force o arremessador a driblar em vez de arremessar.", "Mantenha pressão mesmo se ele não tiver a bola."] },
      { id: "def_20", title: "20. Defesa contra Jogador sem Bola", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[19],
        desc: "O off-ball defense é tão importante quanto defender o driblador. Aprenda posicionamento correto quando seu homem não tem a bola.",
        steps: ["Posicione-se formando um triângulo: você, seu homem e a bola.", "Quanto mais longe da bola, mais perto do garrafão.", "Mantenha sempre visão da bola e do marcador.", "Esteja pronto para ajudar se o driblador passar seu defensor.", "Reaja aos cortes do seu marcador antes que ele receba."] },
      { id: "def_21", title: "21. Recuperação após Ajuda (Recover)", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[20],
        desc: "Depois de ajudar um companheiro na defesa, recupere rapidamente para seu marcador original sem deixar ninguém livre.",
        steps: ["Após dar ajuda defensiva, comunique 'voltando'.", "Sprinte de volta ao seu marcador original.", "Se houve rotação, encontre o jogador mais próximo livre.", "Feche a distância rapidamente com closeout controlado.", "A velocidade de recuperação é mais importante que a ajuda."] },
      { id: "def_22", title: "22. Defesa de Zona 2-3 Posicionamento", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[21],
        desc: "Aprenda o posicionamento correto na defesa zona 2-3: dois jogadores no topo e três embaixo protegendo o garrafão.",
        steps: ["2 jogadores no topo cobrem as alas e topo do garrafão.", "3 jogadores embaixo cobrem cantos e poste baixo.", "Todos se movem como uma unidade com a bola.", "Quando a bola vai para o canto, a zona se desloca.", "Vulnerabilidade: linha de lance livre estendida e cantos."] },
      { id: "def_23", title: "23. Defesa de Zona 3-2 Posicionamento", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[22],
        desc: "Posicionamento na zona 3-2: três jogadores no topo para pressionar arremessadores e dois embaixo protegendo o aro.",
        steps: ["3 jogadores no topo cobrem a linha de 3 pontos.", "2 jogadores embaixo protegem o garrafão e baseline.", "Os 3 de cima pressionam arremessadores.", "Os 2 de baixo cobrem rebotes e entradas.", "Vulnerabilidade: centro do garrafão e cantos."] },
      { id: "def_24", title: "24. Defesa Homem a Homem Pressão Total", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[23],
        desc: "A defesa homem a homem com pressão total em todos os jogadores: técnicas para manter intensidade durante todo o jogo.",
        steps: ["Cada defensor marca um atacante específico.", "Mantenha pressão constante na bola.", "Off-ball: fique na linha de passe negando.", "Comunique TODAS as telas e cortes.", "A intensidade deve ser máxima por 24 segundos de posse."] },
      { id: "def_25", title: "25. Transição Defensiva sob Desvantagem", difficulty: "Avançado", duration: "14 min", youtubeId: defenseVideos[24],
        desc: "Como organizar a defesa quando está em desvantagem numérica no contra-ataque (2v3, 3v4, 4v5).",
        steps: ["Corra de volta imediatamente após perder a bola.", "O primeiro a voltar protege a cesta.", "Os demais vão preenchendo de dentro para fora.", "Retarde o ataque adversário sem cometer falta.", "Organize a marcação assim que todos voltarem."] }
    ]
  }
];

// App State
let currentCategoryId = "arremesso";
let currentExerciseId = "arr_1";
let completedExercises = JSON.parse(localStorage.getItem('completedExercises')) || [];

// DOM Elements
const sidebarNav = document.getElementById('sidebar-nav');
const exerciseList = document.getElementById('exercise-list');
const videoTitle = document.getElementById('video-title');
const videoDifficulty = document.getElementById('video-difficulty');
const videoDuration = document.getElementById('video-duration');
const videoDesc = document.getElementById('video-desc');
const instructionList = document.getElementById('instruction-list');
const completeBtn = document.getElementById('complete-btn');
const progressText = document.getElementById('progress-text');
const progressBarFill = document.getElementById('progress-bar-fill');
const videoPlaceholder = document.getElementById('video-placeholder');
const videoPlayer = document.getElementById('video-player');
const videoIframe = document.getElementById('video-iframe');

// Initialization
function init() {
  renderCategories();
  renderExercises(currentCategoryId);
  loadExercise(currentCategoryId, currentExerciseId);
  updateProgress();
}

// Render the Sidebar Categories
function renderCategories() {
  sidebarNav.innerHTML = '';
  categories.forEach(cat => {
    const completedInCat = cat.exercises.filter(ex => completedExercises.includes(ex.id)).length;
    const btn = document.createElement('button');
    btn.className = `category-btn ${cat.id === currentCategoryId ? 'active' : ''}`;
    btn.onclick = () => selectCategory(cat.id);
    btn.innerHTML = `
      <span>${cat.emoji} ${cat.title}</span>
      <span class="category-count" id="count-${cat.id}">${completedInCat}/${cat.exercises.length}</span>
    `;
    sidebarNav.appendChild(btn);
  });
}

// Render the Exercise List for a specific category
function renderExercises(categoryId) {
  exerciseList.innerHTML = '';
  const category = categories.find(c => c.id === categoryId);
  if (!category) return;

  category.exercises.forEach(ex => {
    const isCompleted = completedExercises.includes(ex.id);
    const card = document.createElement('div');
    card.className = `exercise-card ${ex.id === currentExerciseId ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    card.onclick = () => selectExercise(ex.id);
    card.innerHTML = `
      <div class="card-status-icon">✓</div>
      <div class="card-info">
        <h4 class="card-title">${ex.title}</h4>
        <span class="card-meta">${ex.difficulty} • ${ex.duration}</span>
      </div>
    `;
    exerciseList.appendChild(card);
  });
}

// Load detailed information of a selected exercise
function loadExercise(categoryId, exerciseId) {
  const category = categories.find(c => c.id === categoryId);
  const exercise = category?.exercises.find(ex => ex.id === exerciseId);
  if (!exercise) return;

  currentExerciseId = exerciseId;

  // Update detail view texts
  videoTitle.textContent = exercise.title;
  videoDifficulty.textContent = exercise.difficulty;
  videoDuration.textContent = exercise.duration;
  videoDesc.textContent = exercise.desc;

  // Reset player preview states
  videoPlaceholder.style.display = 'flex';
  videoPlayer.style.display = 'none';
  videoIframe.style.display = 'none';
  videoPlayer.src = '';
  videoIframe.src = '';

  // Build YouTube search query from exercise title and category
  const youtubeId = exercise.youtubeId;

  // Set gradient background for placeholder (no thumbnail since we use search)
  videoPlaceholder.style.background = `url('https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg') center/cover no-repeat`;

  // Set external link to YouTube search
  const extLink = document.getElementById('external-video-link');
  if (extLink) {
    extLink.href = `https://www.youtube.com/watch?v=${youtubeId}`;
    extLink.textContent = `Assistir "${exercise.title.replace(/^\d+\.\s*/, '')}" no YouTube ↗`;
  }
  
  // Render step-by-step instructions
  instructionList.innerHTML = '';
  exercise.steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    instructionList.appendChild(li);
  });

  // Highlight selected item in list
  document.querySelectorAll('.exercise-card').forEach(card => {
    card.classList.remove('active');
  });
  const activeCard = Array.from(exerciseList.children).find((_, idx) => category.exercises[idx].id === exerciseId);
  if (activeCard) {
    activeCard.classList.add('active');
  }

  // Update the complete button state
  const isCompleted = completedExercises.includes(exerciseId);
  if (isCompleted) {
    completeBtn.classList.add('completed');
    completeBtn.innerHTML = `<span>✓ Treino Concluído</span>`;
  } else {
    completeBtn.classList.remove('completed');
    completeBtn.innerHTML = `<span>Marcar como Concluído</span>`;
  }
}

// Select a Category from sidebar
function selectCategory(categoryId) {
  currentCategoryId = categoryId;
  const category = categories.find(c => c.id === categoryId);
  const firstExerciseId = category.exercises[0].id;
  
  renderCategories();
  renderExercises(categoryId);
  selectExercise(firstExerciseId);
}

// Select an Exercise from playlist
function selectExercise(exerciseId) {
  currentExerciseId = exerciseId;
  loadExercise(currentCategoryId, exerciseId);
}

// Toggle completion state of exercise
function toggleComplete() {
  const index = completedExercises.indexOf(currentExerciseId);
  if (index > -1) {
    // Remove completion
    completedExercises.splice(index, 1);
  } else {
    // Complete exercise
    completedExercises.push(currentExerciseId);
  }

  // Save to LocalStorage
  localStorage.setItem('completedExercises', JSON.stringify(completedExercises));

  // Rerender state
  updateProgress();
  renderCategories();
  renderExercises(currentCategoryId);
  loadExercise(currentCategoryId, currentExerciseId);
}

// Update top global progress bar and category counters
function updateProgress() {
  const total = 150;
  const completed = completedExercises.length;
  const percentage = Math.round((completed / total) * 100);

  progressText.innerHTML = `Progresso do Treino: <span>${completed} de ${total}</span> (${percentage}%)`;
  progressBarFill.style.width = `${percentage}%`;
}

// Play educational YouTube video lesson when clicked
function playVideo() {
  const category = categories.find(c => c.id === currentCategoryId);
  const exercise = category?.exercises.find(ex => ex.id === currentExerciseId);
  if (!exercise) return;

  const youtubeId = exercise.youtubeId;
  videoPlaceholder.style.display = 'none';
  videoIframe.style.display = 'block';
  videoIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);

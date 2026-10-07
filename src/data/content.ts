export const brands = [
 {slug:'hermes',name:'Hermès',chinese:'愛馬仕',image:'/images/hermes.webp',line:'時間淬鍊，歷久彌新。',description:'從手工縫線到皮革的自然紋理，每一個細節，都值得細意欣賞。讓您的 Hermès 珍藏，延續下一段故事。',models:['Birkin','Kelly','Constance','Picotin'],note:'皮革種類、尺寸、顏色、刻印年份及配件完整度，是估價的重要考量。'},
 {slug:'chanel',name:'CHANEL',chinese:'香奈兒',image:'/images/chanel.webp',line:'優雅，從來不止一季。',description:'菱格、鏈帶與俐落輪廓，寫下不受時間限制的風格。無論經典翻蓋或日常肩袋，我們都珍視每一件作品的獨特性。',models:['Classic Flap','2.55','Boy CHANEL','CHANEL 19'],note:'皮革狀態、五金磨損、尺寸及購買年份均會影響報價；請提供序號或晶片相關資料。'},
 {slug:'dior',name:'Dior',chinese:'迪奧',image:'/images/dior.webp',line:'將柔美，融入每一天。',description:'從 Lady Dior 的建築感線條，到 Saddle 的流動弧度，Dior 以細節成就個性，也讓經典擁有不同面貌。',models:['Lady Dior','Saddle','Book Tote','Dior Caro'],note:'刺繡或皮革的保存狀態、手柄磨損、肩帶及吊飾的完整度均需仔細評估。'},
 {slug:'celine',name:'CELINE',chinese:'思琳',image:'/images/celine.webp',line:'簡約之中，自有態度。',description:'克制的線條，恰到好處的比例。從 Luggage 到 Triomphe，讓日常與經典之間，多一種自在的選擇。',models:['Triomphe','Luggage','Belt Bag','Classique'],note:'款式、尺寸、皮革邊角、肩帶及鎖扣狀態，是檢視的重點。'},
 {slug:'lv',name:'Louis Vuitton',chinese:'路易威登',image:'/images/lv.webp',line:'陪伴旅程，延續經典。',description:'Monogram 與 Damier 圖紋承載旅行記憶。從日常托特到小巧手提袋，讓熟悉的經典迎來新的旅程。',models:['Neverfull','Speedy','Alma','Pochette Métis'],note:'帆布狀態、植鞣皮變色、內襯及配件完整度，均影響實際回收價。'},
 {slug:'gucci',name:'GUCCI',chinese:'古馳',image:'/images/gucci.webp',line:'經典語言，當代個性。',description:'復古符號與當代設計相遇，讓每一款手袋都擁有鮮明個性。將您的珍藏，交給懂得欣賞下一個故事的人。',models:['GG Marmont','Dionysus','Jackie 1961','Horsebit 1955'],note:'GG 帆布或皮革保存狀態、五金與肩帶，以及款式的市場需求，均納入估價。'},
 {slug:'prada',name:'PRADA',chinese:'普拉達',image:'/images/prada.webp',line:'理性線條，率性優雅。',description:'從尼龍的輕盈到 Saffiano 的俐落，Prada 讓功能與美感自然共存，成為不張揚的日常風格。',models:['Galleria','Re-Edition','Cleo','Re-Nylon'],note:'尼龍布面、Saffiano 皮革、邊油及內襯狀態，配合款式年份綜合估價。'},
 {slug:'goyard',name:'GOYARD',chinese:'戈雅',image:'/images/goyard.webp',line:'低調之中，辨識不凡。',description:'獨特的 Goyardine 圖紋與輕盈結構，將實用融入傳統工藝，陪伴每一段城市日常。',models:['Saint Louis','Artois','Anjou','Belvédère'],note:'袋角與手柄磨損、塗層狀態、尺寸、顏色及內袋配件，是評估重點。'},
 {slug:'fendi',name:'FENDI',chinese:'芬迪',image:'/images/fendi.webp',line:'玩味細節，永恆魅力。',description:'Baguette 的鮮明輪廓，Peekaboo 的細膩結構。不同時代的經典，延續意式設計的自由與創意。',models:['Baguette','Peekaboo','By The Way','Fendi First'],note:'材質、尺寸、五金、手柄及配件狀態，會連同市場需求一起評估。'},
];
export const steps = [
 {number:'01',english:'SHARE YOUR PIECE',title:'分享您的珍藏',description:'透過 WhatsApp 傳送手袋的正面、側面、內裡及序號照片，並告知品牌、款式、購買年份與使用狀況。'},
 {number:'02',english:'A THOUGHTFUL VALUATION',title:'了解價值，預約交收',description:'我們根據照片及市場行情提供初步估價。接受報價後，一起安排合適的時間與安全的交收地點。'},
 {number:'03',english:'BEGIN A NEW CHAPTER',title:'確認實物，安心收款',description:'專人檢視真偽、品相及附件，確認最終報價。雙方同意後安排付款，確認款項後完成交收。'},
];
export const cases = ['Hermès','Hermès','Hermès','CHANEL','CHANEL','Dior','Hermès','CHANEL','Louis Vuitton'].map((brand,i)=>({id:i+1,brand,image:`/images/archive-${i+1}.webp`}));

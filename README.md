# FrontendExercise
1.


    Cookie = Cookie 容量空間有限，大約 4K 左右，可以設定 cookie 的存活期間，如果沒有設定，預設就是當下使用者瀏覽網頁的期間，結束瀏覽器的話就自動消失。
    
    session ＝ 主要儲存於伺服器端，常搭配Cookie來儲存登入狀態。
    
    Local Storage = 除非手動清除，否則並不會消失，容量一般是 5Mb。
    
2.


    CORS 是針對不同源的請求而定的規範，主要是網頁伺服器跨網域的存取控制，增加跨網域資料傳輸的安全性。
3.   


    OPTIONS、HEAD、GET、POST、PUT、DELETE、TRACE、CONNECT
    
4.


    可以防止Margin Collapsing 、Exclude external float  常見方法：display: inline-block; 、 overflow參數不為visible的block元素等等
    
    方法太多不一一贅述，以下網址w3c有更多使用範例
    
    https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
    
5.

    Layout – 計算元素的位置、大小。
    
    Paint – 將元素的文字、顏色、圖片等等繪製在多個 Layer 上。
    
    Compositing – 以正確的順序將 Layers 合併。
    
6.

    px：絕對單位，代表螢幕中每個 pixel。
    
    em：相對單位，每個子元素透過「倍數」乘以父元素的 px 值。
    
    rem：相對單位，每個元素透過「倍數」乘以根元素的 px 值。
    
    
7.

    f12  檢查裡的Console

作品完成：https://alan910615.github.io/FrontendExercise/


因為透過 https://cors-anywhere.herokuapp.com/ 此網站代理送出請求，所以頁面loading比較慢
這是我唯一能夠解決的方法，若有更好的方法  方便的話  可以告訴我嘛 ？

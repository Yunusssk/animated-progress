// HTML'den gerekli öğeleri seçiyoruz
const progress = document.getElementById('progress'); // İlerleme çubuğu
const circles = document.querySelectorAll('.circle'); // Her bir daire
const prev = document.getElementById('prev'); // Önceki düğme
const next = document.getElementById('next'); // Sonraki düğme

let currentActive = 1; // Başlangıçta etkin dairenin indeksi

// "next" düğmesine tıklandığında çalışacak olay dinleyicisi
next.addEventListener("click", () => {
    currentActive++; // Etkin dairenin indeksini bir artır

    // Eğer etkin dairenin indeksi, dairelerin toplam sayısından büyükse, en son daireye sabitle
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    // Güncelleme işlevini çağır
    update();
});

// "prev" düğmesine tıklandığında çalışacak olay dinleyicisi
prev.addEventListener("click", () => {
    currentActive--; // Etkin dairenin indeksini bir azalt

    // Eğer etkin dairenin indeksi 1'den küçükse, ilk daireye sabitle
    if (currentActive < 1) {
        currentActive = 1;
    }

    // Güncelleme işlevini çağır
    update();
});

// Durumu güncellemek için kullanılan işlev
function update() {
    // Her daireyi döngüye alarak durumlarını güncelle
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active"); // Eğer daire etkinse, "active" sınıfını ekle
        } else {
            circle.classList.remove("active"); // Değilse, "active" sınıfını kaldır
        }
    });

    // Aktif daireleri seç
    const actives = document.querySelectorAll(".active");

    // İlerleme çubuğunun genişliğini hesapla ve ayarla
    //console.log((actives.length - 1) / (circles.length - 1) * 100 + "%");
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100 + "%");

    // Eğer etkin daire ilk daire ise, "prev" düğmesini devre dışı bırak
    if (currentActive === 1) {
        prev.disabled = true;
    }
    // Eğer etkin daire son daire ise, "next" düğmesini devre dışı bırak
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    // Aksi halde, her ikisini de etkinleştir
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}
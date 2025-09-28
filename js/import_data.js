document.getElementById("import").addEventListener("change", function() {
        const file = this.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                eval(e.target.result);
                
                if (typeof localBackup === "object") {
                    localStorage.clear();
                    for (const [key, value] of Object.entries(localBackup)) {
                        localStorage.setItem(key, value);
                    }
                    alert("LocalStorage başarıyla geri yüklendi!");
                } else {
                    alert("Geçersiz backup.js dosyası!");
                }
            } catch (err) {
                alert("Dosya okunamadı: " + err.message);
            }
        };
        reader.readAsText(file);
    });

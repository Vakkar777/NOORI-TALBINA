<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <!-- Previous head content remains same -->
    <style>
        /* Add this to existing styles */
        .active-tab {
            background: linear-gradient(45deg, var(--primary), var(--secondary)) !important;
            color: white !important;
        }
    </style>
</head>
<body>
    <!-- Previous body content remains same until hadith section -->

    <!-- Multilingual Hadith Section -->
    <section class="hadith-section">
        <div class="language-tabs">
            <button class="tab-button pulse active-tab" onclick="showHadith('english')">English</button>
            <button class="tab-button pulse" onclick="showHadith('urdu')">Urdu</button>
            <button class="tab-button pulse" onclick="showHadith('hindi')">Hindi</button>
        </div>

        <div class="hadith-box">
            <div id="english-hadith" class="hadith-content">
                <p class="hadith-text">"Talbina gives rest to the heart of the patient and relieves it from grief."</p>
                <p class="source">Sahih al-Bukhari 5689</p>
            </div>
            
            <div id="urdu-hadith" class="hadith-content" style="display: none; direction: rtl; font-family: 'Amiri', serif;">
                <p class="hadith-text">"طلبینہ مریض کے دل کو تسکین دیتا ہے اور اس کے غم کو دور کرتا ہے"</p>
                <p class="source">صحیح بخاری 5689</p>
            </div>

            <div id="hindi-hadith" class="hadith-content" style="display: none;">
                <p class="hadith-text">"तल्बीना रोगी के हृदय को शांति देता है और उसके दुख को दूर करता है"</p>
                <p class="source">सहीह अल-बुखारी 5689</p>
            </div>
        </div>
    </section>

    <!-- Add this script at end of body -->
    <script>
        // Language toggle functionality
        function showHadith(language) {
            // Hide all hadith content
            document.querySelectorAll('.hadith-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show selected hadith
            document.getElementById(`${language}-hadith`).style.display = 'block';
            
            // Update active tab
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active-tab');
            });
            event.target.classList.add('active-tab');
        }

        // Add click animation to all buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    </script>
</body>
</html>

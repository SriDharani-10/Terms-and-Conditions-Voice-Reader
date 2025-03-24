// Store the utterance object globally
let utterance;
let currentText; 

// References to UI elements
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const playbackSpeedSelect = document.getElementById("playback-speed");

// Function to speak predefined terms text
function speakText() {
    let language = document.getElementById("language").value;
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }

        // Set current text based on selected language
        if (language == "English") {
            currentText = "User Responsibility: Users must provide accurate information and maintain account security.  Data Handling: Personal data is processed per the privacy policy and not shared without consent.  Job Post Management: Employers are responsible for the content of job postings.  Fraud Prevention: Fraudulent activities or misleading information may lead to account termination.  Legal Compliance: Disputes are resolved under the relevant legal framework.";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "en-US";
        } else if (language == "Tamil") {
            currentText = "பயனர் பொறுப்பு: பயனர்கள் துல்லியமான தகவலை வழங்க வேண்டும் மற்றும் கணக்கின் பாதுகாப்பைப் பராமரிக்க வேண்டும்.தரவு கையாளுதல்: தனிப்பட்ட தரவு தனியுரிமைக் கொள்கையின்படி செயலாக்கப்படுகிறது மற்றும் ஒப்புதல் இல்லாமல் பகிரப்படாது.வேலை இடுகை மேலாண்மை: வேலை இடுகைகளின் உள்ளடக்கத்திற்கு முதலாளிகள் பொறுப்பு.மோசடி தடுப்பு: மோசடி நடவடிக்கைகள் அல்லது தவறான தகவல் கணக்கு நிறுத்தப்படுவதற்கு வழிவகுக்கும்.சட்ட இணக்கம்: சர்ச்சைகள் தொடர்புடைய சட்ட கட்டமைப்பின் கீழ் தீர்க்கப்படுகின்றன.";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "ta-IN";
        } else if (language == "Malayalam") {
            currentText = "ഉപയോക്തൃ ഉത്തരവാദിത്തം: ഉപയോക്താക്കൾ കൃത്യമായ വിവരങ്ങൾ നൽകുകയും അക്കൗണ്ട് സുരക്ഷ നിലനിർത്തുകയും വേണം.ഡാറ്റ കൈകാര്യം ചെയ്യൽ: സ്വകാര്യതാ നയം അനുസരിച്ച് വ്യക്തിഗത ഡാറ്റ പ്രോസസ്സ് ചെയ്യുന്നു, സമ്മതമില്ലാതെ പങ്കിടില്ല.ജോബ് പോസ്റ്റ് മാനേജ്മെൻ്റ്: തൊഴിൽ പോസ്റ്റിംഗുകളുടെ ഉള്ളടക്കത്തിന് തൊഴിലുടമകൾ ഉത്തരവാദികളാണ്.വഞ്ചന തടയൽ: വഞ്ചനാപരമായ പ്രവർത്തനങ്ങളോ തെറ്റിദ്ധരിപ്പിക്കുന്ന വിവരങ്ങളോ അക്കൗണ്ട് അവസാനിപ്പിക്കുന്നതിലേക്ക് നയിച്ചേക്കാം.നിയമപരമായ അനുസരണം: പ്രസക്തമായ നിയമ ചട്ടക്കൂടിന് കീഴിലാണ് തർക്കങ്ങൾ പരിഹരിക്കപ്പെടുന്നത്.";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "ml-IN";
        } else if (language == "Telugu") {
            currentText = "వినియోగదారు బాధ్యత: వినియోగదారులు తప్పనిసరిగా ఖచ్చితమైన సమాచారాన్ని అందించాలి మరియు ఖాతా భద్రతను నిర్వహించాలి.డేటా హ్యాండ్లింగ్: వ్యక్తిగత డేటా గోప్యతా విధానం ప్రకారం ప్రాసెస్ చేయబడుతుంది మరియు సమ్మతి లేకుండా భాగస్వామ్యం చేయబడదు.జాబ్ పోస్ట్ మేనేజ్‌మెంట్: ఉద్యోగ నియామకాల కంటెంట్‌కు యజమానులు బాధ్యత వహిస్తారు.మోసం నివారణ: మోసపూరిత కార్యకలాపాలు లేదా తప్పుదారి పట్టించే సమాచారం ఖాతా రద్దుకు దారితీయవచ్చు.చట్టపరమైన సమ్మతి: సంబంధిత చట్టపరమైన ఫ్రేమ్‌వర్క్‌లో వివాదాలు పరిష్కరించబడతాయి.";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "te-IN";
        } else if (language == "Kannada"){
            currentText = "ಬಳಕೆದಾರರ ಜವಾಬ್ದಾರಿ: ಬಳಕೆದಾರರು ನಿಖರವಾದ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸಬೇಕು ಮತ್ತು ಖಾತೆಯ ಸುರಕ್ಷತೆಯನ್ನು ನಿರ್ವಹಿಸಬೇಕು.ಡೇಟಾ ನಿರ್ವಹಣೆ: ಗೌಪ್ಯತೆ ನೀತಿಯ ಪ್ರಕಾರ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಒಪ್ಪಿಗೆಯಿಲ್ಲದೆ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.ಉದ್ಯೋಗ ಪೋಸ್ಟ್ ನಿರ್ವಹಣೆ: ಉದ್ಯೋಗದ ಪೋಸ್ಟಿಂಗ್‌ಗಳ ವಿಷಯಕ್ಕೆ ಉದ್ಯೋಗದಾತರು ಜವಾಬ್ದಾರರಾಗಿರುತ್ತಾರೆ.ವಂಚನೆ ತಡೆಗಟ್ಟುವಿಕೆ: ಮೋಸದ ಚಟುವಟಿಕೆಗಳು ಅಥವಾ ತಪ್ಪುದಾರಿಗೆಳೆಯುವ ಮಾಹಿತಿಯು ಖಾತೆಯ ಮುಕ್ತಾಯಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.ಕಾನೂನು ಅನುಸರಣೆ: ಸಂಬಂಧಿತ ಕಾನೂನು ಚೌಕಟ್ಟಿನ ಅಡಿಯಲ್ಲಿ ವಿವಾದಗಳನ್ನು ಪರಿಹರಿಸಲಾಗುತ್ತದೆ.";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "kn-IN";
        } else if (language == "Hindi") {
            currentText = "उपयोगकर्ता की जिम्मेदारी: उपयोगकर्ताओं को सटीक जानकारी प्रदान करनी चाहिए और खाता सुरक्षा बनाए रखनी चाहिए। डेटा प्रबंधन: व्यक्तिगत डेटा को गोपनीयता नीति के अनुसार संसाधित किया जाता है और सहमति के बिना साझा नहीं किया जाता है। नौकरी पोस्ट प्रबंधन: नियोक्ता नौकरी पोस्टिंग की सामग्री के लिए जिम्मेदार हैं। धोखाधड़ी की रोकथाम: धोखाधड़ी की गतिविधियों या भ्रामक जानकारी के कारण खाता समाप्त किया जा सकता है। कानूनी अनुपालन: विवादों का समाधान प्रासंगिक कानूनी ढांचे के तहत किया जाता है।";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "hi-IN"; // Set the language to Hindi
        } else if (language == "French") {
            currentText = "Responsabilité de l'utilisateur : les utilisateurs doivent fournir des informations exactes et maintenir la sécurité de leur compte. Traitement des données : les données personnelles sont traitées conformément à la politique de confidentialité et ne sont pas partagées sans consentement. Gestion des offres d'emploi : les employeurs sont responsables du contenu des offres d'emploi. Prévention de la fraude : des activités frauduleuses ou des informations trompeuses peuvent entraîner la résiliation du compte. Conformité juridique : les litiges sont résolus dans le cadre juridique pertinent.";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "fr-FR"; // Set the language to French
        } else if (language == "Spanish") {
            currentText = "Responsabilidad del usuario: los usuarios deben proporcionar información precisa y mantener la seguridad de la cuenta. Manejo de datos: los datos personales se procesan según la política de privacidad y no se comparten sin consentimiento. Gestión de ofertas de trabajo: los empleadores son responsables del contenido de las ofertas de trabajo. Prevención de fraude: las actividades fraudulentas o la información engañosa pueden provocar la cancelación de la cuenta. Cumplimiento Legal: Las disputas se resuelven bajo el marco legal pertinente.";
            utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = "es-ES"; // Set the language to Spanish
        }
        
        
        
            // Set utterance properties
        utterance.pitch = 1;
        utterance.rate = parseFloat(playbackSpeedSelect.value); // Set playback speed

        // Speak the text
        window.speechSynthesis.speak(utterance);
    } 
}

// Pause the speech
function pauseSpeech() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
    }
}

// Resume the speech
function resumeSpeech() {
    window.speechSynthesis.resume();
}

// Event listeners for playback control buttons
playButton.addEventListener('click', speakText);
pauseButton.addEventListener('click', pauseSpeech);
resumeButton.addEventListener('click', resumeSpeech);

// Listen for language change and adjust speech
document.getElementById("language").addEventListener('change', function() {
    if (window.speechSynthesis.speaking) {
        // Cancel current speech
        window.speechSynthesis.cancel();
    }
    // Speak the text in the newly selected language
    speakText();
});

// Listen for playback speed change and adjust rate
playbackSpeedSelect.addEventListener('change', function() {
    window.speechSynthesis.cancel();
    speakText(playbackSpeedSelect.value);
});




var textsArabic = {
	Log_In: "دخول",
	Uneversity_Id: "الرقم الجامعي",
	password: "كلمة المرور",
	Request_password_by_email: "طلب كلمة المرور عن طريق البريد الإلكتروني",
	Request_password_by_smartphone: "طلب كلمة المرور عن طريق الهاتف المحمول",
	// hello: 'مرحبا',
};

var textsEnglish = {
	Log_In: "Log In",
	Uneversity_Id: "Uneversity ID",
	password: "Password",
	Request_password_by_email: "Request Password By Email",
	Request_password_by_smartphone: "Request Password By Smartphone",
	// hello: 'hello',
};

var currentLanguage = "ar"; // يمكن تغيير القيمة إلى 'en' للإنجليزية

function switchLanguage(lang) {
	if (lang === "ar") {
		currentLanguage = "ar";
		displayTexts(textsArabic);
	} else {
		currentLanguage = "en";
		displayTexts(textsEnglish);
	}
}

function displayTexts(texts) {
	document.getElementById("welcomeText").innerHTML = `<p>${texts.Log_In}</p>`;
	document.getElementById("Unevesity_ID").innerHTML = texts.Uneversity_Id;
	document.getElementById("password").innerHTML = texts.password;
	document.getElementById("linkB").innerHTML = texts.Request_password_by_email;
	document.getElementById("linkC").innerHTML =
		texts.Request_password_by_smartphone;
	document.getElementById("home").innerHTML = texts.home;
	document.getElementById("hello").innerHTML = texts.hello;
}

switchLanguage(currentLanguage); 

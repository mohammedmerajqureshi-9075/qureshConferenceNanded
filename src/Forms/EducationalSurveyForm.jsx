import { useState } from "react";
import '../Forms/EducationalSurveyForm.css';
import img1 from'../assets/WhatsApp Image 2025-01-11 at 20.59.38_f29d1d73.jpg'

function EducationalSurveyForm() {
  const [formData, setFormData] = useState({
    responsiblePerson: "",
    address: "",
    mobileNumber: "",
    postGradGirls: "",
    gradBoys: "",
    gradGirls: "",
    doctor: "",
    engineer: "",
    lawyer: "",
    phd: "",
    govtJobsMen: "",
    govtJobsWomen: "",
    droppedOutBoys: "",
    droppedOutGirls: "",
    totalMen: "",
    totalWomen: "",
    tenthPassBoys: "",
    tenthPassGirls: "",
    twelfthPassBoys: "",
    twelfthPassGirls: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingFields = Object.keys(formData).filter(key => !formData[key]);
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
      return;
    }

    
    const message = `
      خاندا‌ن کے ذمہ دار فرد کا نام: ${formData.responsiblePerson}
      مکمل پتہ: ${formData.address}
      موبائل نمبر: ${formData.mobileNumber}
      پوسٹ گریجویٹ لڑکوں کی تعداد: ${formData.postGradBoys}
      پوسٹ گریجویٹ لڑکیوں کی تعداد: ${formData.postGradGirls}
      گریجویٹ لڑکوں کی تعداد: ${formData.gradBoys}
      گریجویٹ لڑکیوں کی تعداد: ${formData.gradGirls}
      ڈاکٹر: ${formData.doctor}
      انجینئر: ${formData.engineer}
      وکیل: ${formData.lawyer}
      پی ایچ ڈی: ${formData.phd}
      سرکاری ملازمت والے افراد کی تعداد (مرد): ${formData.govtJobsMen}
      سرکاری ملازمت والے افراد کی تعداد (خواتین): ${formData.govtJobsWomen}
      تعلیم ترک کرنے والے طلبہ کی تعداد (لڑکا): ${formData.droppedOutBoys}
      تعلیم ترک کرنے والے طلبہ کی تعداد (لڑکی): ${formData.droppedOutGirls}
      کل افراد خاندان کی تعداد (مرد): ${formData.totalMen}
      کل افراد خاندان کی تعداد (خواتین): ${formData.totalWomen}
      10th پاس لڑکوں کی تعداد: ${formData.tenthPassBoys}
      10th پاس لڑکیوں کی تعداد: ${formData.tenthPassGirls}
      12th پاس لڑکوں کی تعداد: ${formData.twelfthPassBoys}
      12th پاس لڑکیوں کی تعداد: ${formData.twelfthPassGirls}
    `;

   
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919766809653&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ direction: "rtl", fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", margin: "auto" }}>
     <div className="main">
     <div className="main-logo-img">
     <h2 style={{ textAlign: "center" }}>قریش کانفرنس، ضلع ناندیڑ مہاراشٹر</h2>
    <div className="logo-div"> <img src={img1} className="logo-conference" alt="" /></div>
     </div>
      <h3 style={{ textAlign: "center" }}>تعلیمی سروے</h3>
     </div>
      <form onSubmit={handleSubmit}>
        <label>خاندا‌ن کے ذمہ دار فرد کا نام:</label>
        <input type="text" name="responsiblePerson" value={formData.responsiblePerson} onChange={handleChange} />

        <label>مکمل پتہ:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />

        <label>موبائل نمبر:</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />

       
        <label>پوسٹ گریجویٹ لڑکوں کی تعداد:</label>
        <input type="text" name="postGradBoys" value={formData.postGradBoys} onChange={handleChange} />

        <label>پوسٹ گریجویٹ لڑکیوں کی تعداد:</label>
        <input type="text" name="postGradGirls" value={formData.postGradGirls} onChange={handleChange} />

        <label>گریجویٹ لڑکوں کی تعداد:</label>
        <input type="text" name="gradBoys" value={formData.gradBoys} onChange={handleChange} />

        <label>گریجویٹ لڑکیوں کی تعداد:</label>
        <input type="text" name="gradGirls" value={formData.gradGirls} onChange={handleChange} />

        <label>ڈاکٹر:</label>
        <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} />

        <label>انجینئر:</label>
        <input type="text" name="engineer" value={formData.engineer} onChange={handleChange} />

        <label>وکیل:</label>
        <input type="text" name="lawyer" value={formData.lawyer} onChange={handleChange} />

        <label>پی ایچ ڈی:</label>
        <input type="text" name="phd" value={formData.phd} onChange={handleChange} />

        <label>سرکاری ملازمت والے افراد کی تعداد (مرد):</label>
        <input type="text" name="govtJobsMen" value={formData.govtJobsMen} onChange={handleChange} />

        <label>سرکاری ملازمت والے افراد کی تعداد (خواتین):</label>
        <input type="text" name="govtJobsWomen" value={formData.govtJobsWomen} onChange={handleChange} />

        <label>تعلیم ترک کرنے والے طلبہ کی تعداد (لڑکا):</label>
        <input type="text" name="droppedOutBoys" value={formData.droppedOutBoys} onChange={handleChange} />

        <label>تعلیم ترک کرنے والے طلبہ کی تعداد (لڑکی):</label>
        <input type="text" name="droppedOutGirls" value={formData.droppedOutGirls} onChange={handleChange} />

        <label>کل افراد خاندان کی تعداد (مرد):</label>
        <input type="text" name="totalMen" value={formData.totalMen} onChange={handleChange} />

        <label>کل افراد خاندان کی تعداد (خواتین):</label>
        <input type="text" name="totalWomen" value={formData.totalWomen} onChange={handleChange} />

        <label>10th پاس لڑکوں کی تعداد:</label>
        <input type="text" name="tenthPassBoys" value={formData.tenthPassBoys} onChange={handleChange} />

        <label>10th پاس لڑکیوں کی تعداد:</label>
        <input type="text" name="tenthPassGirls" value={formData.tenthPassGirls} onChange={handleChange} />

        <label>12th پاس لڑکوں کی تعداد:</label>
        <input type="text" name="twelfthPassBoys" value={formData.twelfthPassBoys} onChange={handleChange} />

        <label>12th پاس لڑکیوں کی تعداد:</label>
        <input type="text" name="twelfthPassGirls" value={formData.twelfthPassGirls} onChange={handleChange} />

<p>محمد فیصل قریشی ضلع صدر یوتھ )، قریش کا نفرنس، ناندیڑ (مہاراشٹرا)</p>

        <button type="submit" style={{ marginTop: "20px" }}>جمع کریں</button>
      </form>
    </div>
  );
}

export default EducationalSurveyForm;

import React, { useState, useRef } from "react";
import { Clipboard, ShieldAlert, FileText, Upload, CheckCircle, Copy, FilePlus, Building, DollarSign } from "lucide-react";
import { TranslationSet } from "../translations";

interface CustomsProps {
  t: TranslationSet;
}

export default function CustomsRequest({ t }: CustomsProps) {
  const [formData, setFormData] = useState({
    clearanceType: "Import",
    companyName: "",
    goodsDescription: "",
    hsCode: "",
    ntnNumber: "",
    customsNotes: ""
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; msg: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  // Separate file tracking for documents
  const [docs, setDocs] = useState<{ invoice: string; packingList: string; bl: string }>({
    invoice: "",
    packingList: "",
    bl: ""
  });

  const refs = {
    invoice: useRef<HTMLInputElement>(null),
    packingList: useRef<HTMLInputElement>(null),
    bl: useRef<HTMLInputElement>(null)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (type: "invoice" | "packingList" | "bl") => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocs({ ...docs, [type]: e.target.files[0].name });
    }
  };

  const triggerUpload = (type: "invoice" | "packingList" | "bl") => {
    refs[type].current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessData(null);

    if (!formData.companyName || !formData.goodsDescription || !formData.ntnNumber) {
      setErrorMsg("Please fill in all required fields marked with *");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        invoiceFile: docs.invoice || "invoice_placeholder.pdf",
        packingListFile: docs.packingList || "packing_placeholder.pdf",
        blFile: docs.bl || "bl_placeholder.pdf"
      };

      const response = await fetch("/api/customs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();
      if (response.ok) {
        setSuccessData({
          id: resData.customsRequest.id,
          msg: "Your border customs filing request has been received by Agent Yahaya."
        });
        setFormData({
          clearanceType: "Import",
          companyName: "",
          goodsDescription: "",
          hsCode: "",
          ntnNumber: "",
          customsNotes: ""
        });
        setDocs({ invoice: "", packingList: "", bl: "" });
      } else {
        setErrorMsg(resData.error || "Failed to file customs.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Filing failed. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (successData?.id) {
      navigator.clipboard.writeText(successData.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="customs" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-500/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-primary-blue dark:text-blue-400 bg-blue-100 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            BFR & Customs Portal
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mt-3">
            {t.customsTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-2">
            {t.customsSubtitle}
          </p>
        </div>

        {/* Success Alert */}
        {successData && (
          <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-primary-blue rounded-2xl flex flex-col items-center text-center shadow-xl animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary-blue/10 rounded-full blur-2xl"></div>
            <CheckCircle className="w-16 h-16 text-primary-blue mb-4" />
            <h4 className="text-xl font-extrabold text-slate-900 dark:text-white uppercase">Customs Filing Initiated</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-lg">
              {successData.msg} Our Senior Clearing Agent (Yahaya Rahman) will inspect your PSW declaration and initiate border gate pass filing.
            </p>
            
            {/* Ticket Copy */}
            <div className="mt-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-sm w-full max-w-sm justify-between">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Filing Ticket Ref</p>
                <p className="text-xl font-black text-secondary-green dark:text-green-400 tracking-wider mt-0.5">{successData.id}</p>
              </div>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary-green hover:bg-green-700 text-white font-bold text-xs uppercase transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Ref</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-300 text-red-700 dark:text-red-400 rounded-xl text-sm font-bold flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Customs Request Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Clearance Mode */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.importExport}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, clearanceType: "Import" })}
                  className={`py-3 rounded-lg text-xs font-black uppercase border tracking-wider transition-all ${
                    formData.clearanceType === "Import"
                      ? "bg-primary-blue text-white border-primary-blue shadow"
                      : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  📥 {t.import}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, clearanceType: "Export" })}
                  className={`py-3 rounded-lg text-xs font-black uppercase border tracking-wider transition-all ${
                    formData.clearanceType === "Export"
                      ? "bg-primary-blue text-white border-primary-blue shadow"
                      : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  📤 {t.export}
                </button>
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.companyLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Khyber Agri Trading Ltd"
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* HS Code */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.hsCode}
              </label>
              <div className="relative">
                <Clipboard className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="hsCode"
                  value={formData.hsCode}
                  onChange={handleChange}
                  placeholder="e.g. HS-0806.2000 (Grapes, dried)"
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* NTN Number */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.ntn} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="ntnNumber"
                  required
                  value={formData.ntnNumber}
                  onChange={handleChange}
                  placeholder="e.g. NTN-4829302-9"
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                />
              </div>
            </div>

            {/* Goods Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.goodsDesc} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <textarea
                  name="goodsDescription"
                  required
                  rows={2}
                  value={formData.goodsDescription}
                  onChange={handleChange}
                  placeholder="Describe your goods, packaging, number of crates/bags, and net value..."
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
                ></textarea>
              </div>
            </div>

            {/* Triple Document Upload Fields */}
            <div className="md:col-span-2 border-t border-slate-100 dark:border-slate-700 pt-6 mt-2">
              <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span>📁 Upload Official Cargo Manifest Documents</span>
                <span className="text-[10px] text-primary-blue dark:text-blue-400 font-bold lowercase normal-case italic">(optional but highly recommended for prompt clearing)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Invoice Document */}
                <div
                  onClick={() => triggerUpload("invoice")}
                  className="border border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-4 text-center cursor-pointer hover:border-primary-blue transition-colors bg-slate-50 dark:bg-slate-900"
                >
                  <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1.5" />
                  <p className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase truncate">
                    {docs.invoice ? docs.invoice : t.invoiceUpload}
                  </p>
                  <input
                    ref={refs.invoice}
                    type="file"
                    onChange={handleFileUpload("invoice")}
                    className="hidden"
                  />
                </div>

                {/* 2. Packing List */}
                <div
                  onClick={() => triggerUpload("packingList")}
                  className="border border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-4 text-center cursor-pointer hover:border-primary-blue transition-colors bg-slate-50 dark:bg-slate-900"
                >
                  <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1.5" />
                  <p className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase truncate">
                    {docs.packingList ? docs.packingList : t.packingListUpload}
                  </p>
                  <input
                    ref={refs.packingList}
                    type="file"
                    onChange={handleFileUpload("packingList")}
                    className="hidden"
                  />
                </div>

                {/* 3. BL / AWB */}
                <div
                  onClick={() => triggerUpload("bl")}
                  className="border border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-4 text-center cursor-pointer hover:border-primary-blue transition-colors bg-slate-50 dark:bg-slate-900"
                >
                  <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1.5" />
                  <p className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase truncate">
                    {docs.bl ? docs.bl : t.blAwbUpload}
                  </p>
                  <input
                    ref={refs.bl}
                    type="file"
                    onChange={handleFileUpload("bl")}
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                {t.notes}
              </label>
              <textarea
                name="customsNotes"
                rows={2}
                value={formData.customsNotes}
                onChange={handleChange}
                placeholder="Indicate custom requests such as custom inspection gate priority or transit tax benefits..."
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 text-sm font-bold focus:border-primary-blue outline-none transition-colors dark:text-white"
              ></textarea>
            </div>

          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-blue hover:bg-blue-800 disabled:bg-slate-400 text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>FILING CUSTOM DECD ON PSW...</span>
              ) : (
                <>
                  <Clipboard className="w-5 h-5" />
                  <span>Submit Customs Filing Request</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}

export const arabicLocaleText = {
  noRowsLabel: "لا توجد سجلات",
  noResultsOverlayLabel: "لم يتم العثور على نتائج.",
  columnsPanelTextFieldLabel: "ابحث عن العمود",
  columnsPanelTextFieldPlaceholder: "عنوان العمود",
  columnsPanelDragIconLabel: "إعادة ترتيب العمود",
  columnsPanelShowAllButton: "إظهار الكل",
  columnsPanelHideAllButton: "إخفاء الكل",
  filterPanelAddFilter: "إضافة مرشح",
  filterPanelRemoveAll: "إزالة الكل",
  filterPanelDeleteIconLabel: "حذف",
  filterPanelLogicOperator: "منطق مشغل",
  filterPanelOperator: "مشغل",
  filterPanelOperatorAnd: "و",
  filterPanelOperatorOr: "أو",
  filterPanelColumns: "أعمدة",
  filterPanelInputLabel: "قيمة",
  filterPanelInputPlaceholder: "تصفية القيمة",
  filterOperatorContains: "يحتوي على",
  filterOperatorEquals: "يساوي",
  filterOperatorStartsWith: "يبدأ بـ",
  filterOperatorEndsWith: "ينتهي بـ",
  filterOperatorIs: "هو",
  filterOperatorNot: "ليس",
  filterOperatorAfter: "بعد",
  filterOperatorOnOrAfter: "على أو بعد",
  filterOperatorBefore: "قبل",
  filterOperatorOnOrBefore: "على أو قبل",
  filterOperatorIsEmpty: "فارغ",
  filterOperatorIsNotEmpty: "ليس فارغًا",
  filterValueAny: "أي",
  filterValueTrue: "صحيح",
  filterValueFalse: "خاطئ",
  columnMenuLabel: "قائمة",
  columnMenuShowColumns: "إظهار الأعمدة",
  columnMenuManageColumns: "إدارة الأعمدة",
  columnMenuFilter: "تصفية",
  columnMenuHideColumn: "إخفاء",
  columnMenuUnsort: "إلغاء الترتيب",
  columnMenuSortAsc: "ترتيب تصاعدي",
  columnMenuSortDesc: "ترتيب تنازلي",
  columnHeaderFiltersTooltipActive: (count) =>
    `${count} ${count === 1 ? "مرشح" : "مرشحات"} نشطة`,
  columnHeaderFiltersLabel: "إظهار المرشحات",
  columnHeaderSortIconLabel: "فرز",
  footerRowSelected: (count) =>
    `تم تحديد ${count.toLocaleString()} ${count === 1 ? "عنصر" : "عناصر"}`,
  footerTotalRows: "مجموع الصفوف:",
  toolbarDensity: "كثافة",
  toolbarDensityLabel: "كثافة",
  toolbarDensityCompact: "مضغوط",
  toolbarDensityStandard: "قياسي",
  toolbarDensityComfortable: "مريح",
  toolbarColumns: "الأعمدة",
  toolbarColumnsLabel: "حدد الأعمدة",
  toolbarFilters: "المرشحات",
  toolbarFiltersLabel: "عرض المرشحات",
  toolbarExport: "تصدير",
  toolbarExportLabel: "تصدير",
  toolbarExportCSV: "تصدير كملف CSV",
  toolbarExportPrint: "طباعة",
  footerPaginationRowsPerPage: "عدد الصفوف لكل صفحة:",
  RowsPerPage: "عدد الصفوف لكل صفحة:",

  footerPaginationLabelDisplayedRows: ({ from, to, count }) =>
    `من ${from} إلى ${to} من ${count !== -1 ? count : `أكثر من ${to}`}`,
};

export function translatePath(segment) {
  switch (segment.toLowerCase()) {
    case "home":
      return "الرئيسية";
    case "staff":
      return "الموظف";
    case "details":
      return "التفاصيل";
    case "profile":
      return "الملف الشخصي";
    case "settings":
      return "الإعدادات";
    case "orders":
      return "الطلبات";
    case "order":
      return "طلب";
    case "edit":
      return "تعديل";
    case "transaction":
      return "المعاملة";
    case "notifications":
      return "إشعارات";
    case "chat":
      return "الدردشات";
    case "reviews":
      return "المراجعات";
    default:
      return segment;
  }
}

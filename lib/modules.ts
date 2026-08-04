export interface SidebarItem {
  label: string;
  href: string;
}

export interface SaasModule {
  key: string;
  label: string;
  sidebarItems: SidebarItem[];
}

export const dentalModule: SaasModule = {
  key: "dental",
  label: "عيادة الأسنان",
  sidebarItems: [
    { label: "المواعيد", href: "/dashboard/dental/appointments" },
    { label: "جدول الدكاترة", href: "/dashboard/dental/doctors" },
  ],
};

export const labModule: SaasModule = {
  key: "lab",
  label: "المعمل",
  sidebarItems: [
    { label: "طلبات التحاليل", href: "/dashboard/lab/orders" },
    { label: "النتائج", href: "/dashboard/lab/results" },
  ],
};

export const ALL_MODULES: Record<string, SaasModule> = {
  dental: dentalModule,
  lab: labModule,
};

export function getActiveModules(activeModuleKeys: string[]): SaasModule[] {
  return activeModuleKeys
    .map((key) => ALL_MODULES[key])
    .filter((mod): mod is SaasModule => Boolean(mod));
}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker için: bağımlılıkların tamamı yerine sadece gerekli
  // dosyaları içeren, kendi başına çalışan bir çıktı üretir.
  output: "standalone",
};

export default nextConfig;

// import { registerAs } from "@nestjs/config";

import { registerAs } from "@nestjs/config";

// import { registerAs } from "@nestjs/config/dist";

export default registerAs ('post', () => {
  return {
    currency: process.env.CURRENCY,
    ShowMobileNumber: process.env.SHOW_MOBIL_NAMBER,
  };
});
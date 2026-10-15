// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './search'
import './validate'

// Alternatively you can use CommonJS syntax:
// require('./commands')

experimentalStudio: true

Cypress.on('uncaught:exception', (err, runnable) => {
    // ถ้าข้อผิดพลาดคือ status code 429 ให้ข้ามการทดสอบนี้
    if (err.message.includes('Request failed with status code 429')) {
      // คืนค่า 'false' เพื่อไม่ให้ Cypress ล้มเหลว
      return false;
    }
    
    // การคืนค่า false จะทำให้การทดสอบไม่ล้มเหลว
    if (err.message.includes('Cannot read properties of null')) {
      return false;
    }

    // กรองข้อผิดพลาดที่เกี่ยวกับ IntersectionObserver ไม่ให้ Cypress ล้มเหลวจากข้อผิดพลาดนี้
    if (err.message.includes('Failed to execute \'observe\' on \'IntersectionObserver\'')) {
      return false;
    }
  });
  
  
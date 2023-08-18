var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      // ...
    },
    options: {
      responsive: true, // ทำให้แผนภูมิเรียงตามขนาดหน้าจอ
      maintainAspectRatio: false, // ไม่รักษาอัตราส่วนเดิม
      aspectRatio: 0.8, // อัตราส่วนความกว้างต่อความสูงของแผนภูมิ
      // ...
    }
    
  });
  
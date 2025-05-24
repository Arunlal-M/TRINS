// export default function FoodMenu() {
//   return (
//     <div className="mt-64 mainContainer">
//       <div className="relative w-full h-[500px] flex items-center justify-center">
//         <img
//           src="/image/food-menu/cover.png"
//           alt="Food Menu Cover"
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         />
//         <img
//           src="/image/food-menu/coverOverGradient.png"
//           alt="Food Menu Gradient Overlay"
//           className="absolute inset-0 w-full h-full object-cover z-10"
//         />
//         <h1
//           className="relative z-20 text-white text-7xl font-normal"
//           style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
//         >
//           TABULAR – FOOD
//         </h1>
//       </div>
//       <div className="w-full flex flex-col items-center py-20 px-4">
//         <h2
//           className="text-5xl font-normal mb-12 text-center"
//           style={{
//             fontFamily: "Gideon Roman, serif",
//             letterSpacing: 1,
//           }}
//         >
//           FOOD MENU Western 7th April to 13th April
//         </h2>
//         <div className="overflow-x-auto w-full flex">
//           <table className="min-w-[1100px] border-separate border-spacing-2" style={{width: "max-content", margin: "auto"}}>
//             <thead>
//               <tr>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>DAY & DATE</th>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Monday</th>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Tuesday</th>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Wednesday</th>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Thursday</th>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Friday</th>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Saturday</th>
//                 <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Sunday</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 'Break fast',
//                 'Morning snacks',
//                 'Lunch',
//                 'Evening Snacks',
//                 'Dinner',
//                 'Post-Dinner',
//               ].map((meal, idx) => (
//                 <tr key={meal}>
//                   <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>{meal}</td>
//                   {[...Array(7)].map((_, i) => (
//                     <td key={i} className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>{meal}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function FoodMenu() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/food-menu/cover.png"
          alt="Food Menu Cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="/image/food-menu/coverOverGradient.png"
          alt="Food Menu Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <h1
          className="relative z-20 text-white text-7xl font-normal"
          style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
        >
          TABULAR – FOOD
        </h1>
      </div>
      <div className="w-full flex flex-col items-center py-20 px-4">
        <h2
          className="text-5xl font-normal mb-12 text-center"
          style={{
            fontFamily: "Gideon Roman, serif",
            letterSpacing: 1,
          }}
        >
          FOOD MENU TRINS 
        </h2>
        <div className="overflow-x-auto w-full flex">
          <table className="min-w-[1100px] border-separate border-spacing-2" style={{ width: "max-content", margin: "auto" }}>
            <thead>
              <tr>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>DAY & DATE</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>Monday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>Tuesday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>Wednesday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>Thursday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>Friday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>Saturday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{ fontFamily: 'Gideon Roman' }}>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Break fast</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Vermicelli Khichdi, Coconut Chutney, Fresh Fruits, Cornflakes with cold & hot Milk, Multigrain Bread, Butter & Jam.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Idiyappam, Egg Curry, Porridge, Multigrain Bread, Butter & Jam, Hot Milk [Horlicks] Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Vegetable Uppuma, Kadala Curry, Corn Flakes with Cold & Hot Milk, Bread, Butter & Jam, Fresh Fruits.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Kal Appam, Vegetable Mappaz, Porridge, Bread, Butter & Jam, Fresh Juice, Hot Milk[Boost].</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Millet Dosa, Sambar, Chutney, Corn Flakes with Cold & Hot Milk, Bread, Butter & Jam, Fresh Fruits.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Palak Poori, Bhaji, Chocos with Cold & Hot Milk, Bread, Butter & Jam, Fresh Juice, Hot Flavoured Milk.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Ghee Roast, Sambar, Chutney, Porridge Bread, Butter & Jam, Fresh Fruits, Fried Egg, Coffee</td>
              </tr>
              <tr>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Morning snacks</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Chocolate Roll, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Channa & Shakarakand chat, Hot Milk</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Oats & Dates Muffins, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Egg Sandwich, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Mint Cucumber Sandwich, Ragi Hurruttu.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Millets Cookies, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Cake, Fresh juice.</td>
              </tr>
              <tr>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lunch</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Curd Rice, Plain Rice, Vegetable Cutlet, Mixed Vegetable Theeyal, Thakkali Rasam, Pappad, Pickle, Pineapple Custard.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Masala Uthappam, Plain Rice, Sambar, Coconut Chutney, Rasavada, Pachakari Mezhikuperatty, Curd, Apple.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Iddli, Vada, Plain Rice, Sambar, Tomato Chutney, Vanpayar Thoran, Curd, Paladaa Payasam.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Kappa, Plain Rice, Chicken curry, Pappaya Thoran, Moru curry, Caramel Custard.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Chamba Rice Plain Rice, Parippu curry, Pachakari, Vada Koottu curry, Kitchadi, Mango Pickle, Pappad Vermicelly Payasam.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Egg Fried Rice, Plain rice, Chicken Manchurian, Erussery, Dal Fry, Cut Fruits; Pineapple.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Chamba Rice, Plain Rice, Fish Curry, Pachakari Thoran, Pepper Rasam, Payasam.</td>
              </tr>
              <tr>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Evening Snacks</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Vegetable Samosa, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Dates Cake, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Dilkush, Fresh juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Millet Chicken Pizza, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Chicken Puff, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Banana Fritters, Fresh Juice.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Bakery Special, Coffee</td>
              </tr>
              <tr>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Dinner</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Chappathi, Plain Rice, Butter Chicken, Paneer Makhani, Vegetable Foogath, Dal Fry, Dessert.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Appam, Plain Rice, Chicken Malabari, Beetroot Thoran, Dessert.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Chappathi, Plain Rice, Chicken Ularthiyathu, Cheera Thoran, Pineaple Rasam, Dessert.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Chicken Biryani, Vegetable Biryani, Raitha, Pickle, Pappad, Cut Fruits; Pineapple.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Ghee Rice, Plain Rice, Chicken Masala, Payar Mezhikuperatty, Dalma, Dessert.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Bhattoora, Plain Rice, Channa Masala, Urulakizhangu & Beetroot Mezhikuperatty, Dal Lasooni, Dessert.</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Salad, Chappathi, Plain Rice, Chicken Kofta curry, Paneer Kofta Curry, Dal Makhani, Bhindi cholapuri Dessert.</td>
              </tr>
              <tr>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Post-Dinner</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lime Juice, Hot Milk, Horlicks</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lime Juice, Hot Milk (Bournvita)</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lime Juice, Hot milk (Boost)</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lime Juice, Hot milk (Bournvita)</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lime Juice, Hot milk (Boost)</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lime Juice, Hot Milk (Bournvita)</td>
                <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>Lime Juice, Hot milk (Boost)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
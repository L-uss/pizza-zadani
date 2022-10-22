# pizza-zadani

V tomto cvičení vdechneme život aplikaci, která umožňuje vybrat si různé ingredience na objednávanou pizzu. Uživatel uvidí seznam ingrediencí a bude moci si zaškrtnout, které ingredience chce na své pizze.

Naklonujte si repozitář se zadáním projektu. Prohlédněte si strukturu kódu a vyzkoušejte si fungování aplikace.

Budeme chtít abychom dokázali zobrazit počet zašrktnutých ingrediencí a jejich celkovou cenu. Všimněte si, že komponenta Check je uncontrolled, spravuje tedy svůj vlastní stav.

1. Jako první krok povyšte stav komponenty Check o jednu úroveň nahoru, tedy do komponenty Topping. Komponenta Check tak bude mít props checked a onChange.

2. Abychom dokázali zobrazit počet zaškrnutých ingrediencí, bude potřeba povýšit stav až do komponenty ToppingsSelect. Podobně jako v lekci k tomu využijte připravené pole toppings. Každý objekt obsahuje vlastnost selected, který by se měla měnit v závislosti na tom, co uživatel zaškrtnul.

3. Rozšiřte aplikaci tak, aby zobrazovala také celkovou cenu.
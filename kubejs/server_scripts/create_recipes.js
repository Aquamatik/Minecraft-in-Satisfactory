ServerEvents.recipes(e => {
//Replace Items
    e.replaceInput(
        {input:'create:iron_sheet'},
        'create:iron_sheet',
        'kubejs:iron_plate'
    )

//Smelter
    e.smelting('kubejs:caterium_ingot','kubejs:caterium')

//Constructor
//e.recipes.create.compacting('','')
    e.recipes.create.compacting('2x kubejs:iron_plate','3x minecraft:iron_ingot')
    e.recipes.create.compacting('kubejs:iron_rod','minecraft:iron_ingot')
    e.recipes.create.compacting('3x kubejs:ficsite_trigon','kubejs:ficsite_ingot')
    e.recipes.create.compacting('kubejs:reanimated_sam','4x kubejs:sam')
    e.recipes.create.compacting('kubejs:steel_beam','4x kubejs:steel_ingot')
    e.recipes.create.compacting('2x kubejs:steel_pipe','3x kubejs:steel_ingot')
    e.recipes.create.compacting('4x kubejs:empty_canister','2x kubejs:plastic')
    e.recipes.create.compacting('3x kubejs:quartz_crystal','5x minecraft:quartz')
    e.recipes.create.compacting('2x kubejs:aluminum_casing','3x kubejs:aluminum_ingot')
    e.recipes.create.compacting('5x kubejs:silica','3x minecraft:quartz')
    e.recipes.create.compacting('kubejs:copper_sheet','2x minecraft:copper_ingot')
    e.recipes.create.compacting('1x kubejs:copper_powder','6x minecraft:copper_ingot')
    e.recipes.create.compacting('kubejs:empty_fluid_tank','kubejs:aluminum_ingot')
    e.recipes.create.compacting('5x kubejs:quickwire','kubejs:caterium_ingot')
    e.recipes.create.compacting('4x kubejs:solid_biofuel','8x kubejs:biomass')
    e.recipes.create.compacting('10x kubejs:biomass','kubejs:mycelia')
    e.recipes.create.compacting('50x kubejs:biomass','kubejs:alien_protein')
    e.recipes.create.compacting('5x kubejs:biomass','10x #minecraft:leaves')
    e.recipes.create.compacting('20x kubejs:biomass','4x #minecraft:logs')
    e.recipes.create.compacting('kubejs:alien_protein','minecraft:rotten_flesh')
    e.recipes.create.compacting('kubejs:alien_protein','minecraft:spider_eye')
    e.recipes.create.compacting('kubejs:alien_protein','minecraft:gunpowder')
    e.recipes.create.compacting('kubejs:alien_protein','minecraft:bone')
    e.recipes.create.compacting('kubejs:alien_dna_capsule','kubejs:alien_protein')
    e.recipes.create.compacting('kubejs:concrete','3x kubejs:limestone')
    e.recipes.create.compacting('4x kubejs:screws','kubejs:iron_rod')
    e.recipes.create.compacting('kubejs:cable','2x kubejs:wire')
    e.recipes.create.compacting('2x kubejs:wire','minecraft:copper_ingot')

//Assembler
//e.recipes.create.compacting('',['','']).heated()
    e.recipes.create.compacting('kubejs:circuit_board',['2x kubejs:copper_sheet','4x kubejs:plastic']).heated()
    e.recipes.create.compacting('2x kubejs:versatile_framework',['kubejs:modular_frame','12x kubejs:steel_beam']).heated()
    e.recipes.create.compacting('3x kubejs:alclad_aluminum_sheet',['3x kubejs:aluminum_ingot','minecraft:copper_ingot']).heated()
    e.recipes.create.compacting('kubejs:encased_industrial_beam',['3x kubejs:steel_beam','6x kubejs:concrete']).heated()
    e.recipes.create.compacting('kubejs:motor',['2x kubejs:stator','2x kubejs:rotor']).heated()
    e.recipes.create.compacting('kubejs:stator',['3x kubejs:steel_pipe','8x kubejs:wire']).heated()
    e.recipes.create.compacting('kubejs:automated_wiring',['kubejs:stator','20x kubejs:cable']).heated()
    e.recipes.create.compacting('kubejs:ai_limiter',['5x kubejs:copper_sheet','20x kubejs:quickwire']).heated()
    e.recipes.create.compacting('2x kubejs:modular_frame',['3x kubejs:reinforced_iron_plate','12x kubejs:iron_rod']).heated()
    e.recipes.create.compacting('kubejs:rotor',['5x kubejs:iron_rod','25x kubejs:screws']).heated()
    e.recipes.create.compacting('kubejs:smart_plating',['kubejs:reinforced_iron_plate','kubejs:rotor']).heated()
    e.recipes.create.compacting('kubejs:encased_plutonium_cell',['2x kubejs:plutonium_pellet','4x kubejs:concrete']).heated()
    e.recipes.create.compacting('kubejs:pressure_conversion_cube',['kubejs:fused_modular_frame','2x kubejs:radio_control_unit']).heated()
    e.recipes.create.compacting('kubejs:assembly_director_system',['2x kubejs:adaptive_control_unit','kubejs:supercomputer']).heated()
    e.recipes.create.compacting('2x kubejs:electromagnetic_control_rod',['3x kubejs:stator','2x kubejs:ai_limiter']).heated()
    e.recipes.create.compacting('2x kubejs:magnetic_field_generator',['5x kubejs:versatile_framework','2x kubejs:electromagnetic_control_rod']).heated()
    e.recipes.create.compacting('kubejs:heat_sink',['5x kubejs:alclad_aluminum_sheet','3x kubejs:copper_sheet']).heated()
    e.recipes.create.compacting('kubejs:fabric',['kubejs:mycelia','5x kubejs:biomass']).heated()
    e.recipes.create.compacting('kubejs:reinforced_iron_plate',['6x kubejs:iron_plate','12x kubejs:screws']).heated()
    e.recipes.create.compacting('5x kubejs:compacted_coal',['5x minecraft:coal','5x kubejs:sulfur']).heated()

//Foundry
//e.recipes.create.mixing('',['',''])
    e.recipes.create.mixing('3x kubejs:steel_ingot',['3x minecraft:coal_ore','3x minecraft:iron_ore'])
    e.recipes.create.mixing('4x kubejs:aluminum_ingot',['6x kubejs:aluminum_scrap','5x kubejs:silica'])

//Refinery
//e.recipes.create.mixing(['',''],['','']).heated()
    e.recipes.create.mixing([Fluid.of('kubejs:fuel',600),'3x kubejs:polymer_resin'],Fluid.of('kubejs:crude_oil',900)).heated()
    e.recipes.create.mixing(['2x kubejs:plastic',Fluid.of('kubejs:heavy_oil_residue',300)], Fluid.of('kubejs:crude_oil',900)).heated()
    e.recipes.create.mixing(['2x kubejs:rubber',Fluid.of('kubejs:heavy_oil_residue',600)],Fluid.of('kubejs:crude_oil',900)).heated()
    e.recipes.create.mixing(Fluid.of('kubejs:fuel',600),Fluid.of('kubejs:heavy_oil_residue',900)).heated()
    e.recipes.create.mixing('kubejs:plastic',['3x kubejs:polymer_resin',Fluid.of('minecraft:water')]).heated()
    e.recipes.create.mixing('kubejs:rubber',['2x kubejs:polymer_resin',Fluid.of('minecraft:water')]).heated()
    e.recipes.create.mixing([Fluid.of('kubejs:alumina_solution',600),'kubejs:silica'],['2x kubejs:bauxite',Fluid.of('minecraft:water',900)]).heated()
    e.recipes.create.mixing(['3x kubejs:aluminum_scrap',Fluid.of('minecraft:water',500)],[Fluid.of('kubejs:alumina_solution'),'minecraft:coal']).heated()
    e.recipes.create.mixing(Fluid.of('kubejs:sulfuric_acid'),['kubejs:sulfur',Fluid.of('minecraft:water')]).heated()
    
//Manufacturer
//e.recipes.create.mixing('',['','','']).superheated()
    e.recipes.create.mixing('kubejs:sam_fluctuator',['6x kubejs:reanimated_sam','5x kubejs:wire','3x kubejs:steel_pipe']).superheated()
    e.recipes.create.mixing('2x kubejs:crystal_oscillator',['36x kubejs:quartz_crystal','28x kubejs:cable','5x kubejs:reinforced_iron_plate']).superheated()
    e.recipes.create.mixing('kubejs:computer',['4x kubejs:circuit_board','8x kubejs:cable','16x kubejs:plastic']).superheated()
    e.recipes.create.mixing('kubejs:heavy_modular_frame',['kubejs:modular_frame','5x kubejs:steel_pipe','kubejs:encased_industrial_beam','24x kubejs:screws']).superheated()
    e.recipes.create.mixing('kubejs:modular_engine',['2x kubejs:motor','15x kubejs:rubber','2x kubejs:smart_plating']).superheated()
    e.recipes.create.mixing('kubejs:adaptive_control_unit',['5x kubejs:automated_wiring','5x kubejs:circuit_board','kubejs:heavy_modular_frame','2x kubejs:computer']).superheated()
    e.recipes.create.mixing('kubejs:plutonium_fuel_rod',['30x kubejs:encased_plutonium_cell','18x kubejs:steel_beam','6x kubejs:electromagnetic_control_rod','10x kubejs:heat_sink']).superheated()
    e.recipes.create.mixing('kubejs:supercomputer',['4x kubejs:computer','2x kubejs:ai_limiter','3x kubejs:high-speed_connector','28x kubejs:plastic']).superheated()
    e.recipes.create.mixing('2x kubejs:radio_control_unit',['32x kubejs:aluminum_casing','kubejs:crystal_oscillator','2x kubejs:computer']).superheated()
    e.recipes.create.mixing('kubejs:high-speed_connector',['56x kubejs:quickwire','10x kubejs:cable','kubejs:circuit_board']).superheated()
    e.recipes.create.mixing('kubejs:uranium_fuel_rod',['50x kubejs:encased_uranium_cell','3x kubejs:encased_industrial_beam','5x kubejs:electromagnetic_control_rod']).superheated()
    e.recipes.create.mixing('kubejs:turbo_motor',['4x kubejs:cooling_system','2x kubejs:radio_control_unit','4x kubejs:motor','24x kubejs:rubber']).superheated()
    e.recipes.create.mixing('2x kubejs:thermal_propulsion_rocket',['5x kubejs:modular_enginge','2x kubejs:turbo_motor','6x kubejs:cooling_system','2x kubejs:fused_modular_frame']).superheated()
    e.recipes.create.mixing('10x kubejs:singularity_cell',['kubejs:nuclear_pasta','kubejs:dark_matter_crystal','5x kubejs:iron_plate','10x kubejs:concrete']).superheated()
    e.recipes.create.mixing('kubejs:ballistic_warp_drive',['kubejs:thermal_propulsion_rocket','5x kubejs:singularity_cell','2x kubejs:superposition_oscillator','40x kubejs:dark_matter_crystal']).superheated()

//Packager
//e.recipes.create.filling('',['',Fluid.of('')])
    e.recipes.create.filling('kubejs:packaged_fuel',['kubejs:empty_canister',Fluid.of('kubejs:fuel')])
    e.recipes.create.filling('kubejs:packaged_oil',['kubejs:empty_canister',Fluid.of('kubejs:crude_oil')])
    e.recipes.create.filling('kubejs:packaged_heavy_oil_residue',['kubejs:empty_canister',Fluid.of('kubejs:heavy_oil_residue')])
    e.recipes.create.filling('kubejs:packaged_water',['kubejs:empty_canister',Fluid.of('minecraft:water')])
    e.recipes.create.filling('kubejs:packaged_alumina_solution',['kubejs:empty_canister',Fluid.of('kubejs:alumina_solution')])
    e.recipes.create.filling('kubejs:packaged_nitric_acid',['kubejs:empty_fluid_tank',Fluid.of('kubejs:nitric_acid')])
    e.recipes.create.filling('kubejs:packaged_sulfuric_acid',['kubejs:empty_canister',Fluid.of('kubejs:sulfuric_acid')])
    e.recipes.create.filling('kubejs:packaged_nitrogen_gas',['kubejs:empty_fluid_tank',Fluid.of('kubejs:nitrogen_gas')])

//Unpackager
//e.recipes.create.emptying([Fluid.of(''),''],'')
    e.recipes.create.emptying([Fluid.of('kubejs:fuel'),'kubejs:empty_canister'],'kubejs:packaged_fuel')
    e.recipes.create.emptying([Fluid.of('kubejs:crude_oil'),'kubejs:empty_canister'],'kubejs:packaged_oil')
    e.recipes.create.emptying([Fluid.of('kubejs:heavy_oil_residue'),'kubejs:empty_canister'],'kubejs:packaged_heavy_oil_residue')
    e.recipes.create.emptying([Fluid.of('minecraft:water'),'kubejs:empty_canister'],'kubejs:packaged_water')
    e.recipes.create.emptying([Fluid.of('kubejs:alumina_solution'),'kubejs:empty_canister'],'kubejs:packaged_alumina_solution')
    e.recipes.create.emptying([Fluid.of('kubejs:nitric_acid'),'kubejs:empty_fluid_tank'],'kubejs:packaged_nitric_acid')
    e.recipes.create.emptying([Fluid.of('kubejs:sulfuric_acid'),'kubejs:empty_canister'],'kubejs:packaged_sulfuric_acid')
    e.recipes.create.emptying([Fluid.of('kubejs:nitrogen_gas'),'kubejs:empty_fluid_tank'],'kubejs:packaged_nitrogen_gas')

//Blender
    e.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:biochemical_sculptor')
        ],
        'kubejs:assembly_director_system',
        [
            e.recipes.create.deploying('kubejs:incomplete_biochemical_sculptor',['kubejs:incomplete_biochemical_sculptor','kubejs:ficsite_trigon']),
            e.recipes.create.deploying('kubejs:incomplete_biochemical_sculptor',['kubejs:incomplete_biochemical_sculptor','kubejs:ficsite_trigon']),
            e.recipes.create.deploying('kubejs:incomplete_biochemical_sculptor',['kubejs:incomplete_biochemical_sculptor','kubejs:ficsite_trigon']),
            e.recipes.create.deploying('kubejs:incomplete_biochemical_sculptor',['kubejs:incomplete_biochemical_sculptor','kubejs:ficsite_trigon']),
            e.recipes.create.filling('kubejs:incomplete_biochemical_sculptor',['kubejs:incomplete_biochemical_sculptor',Fluid.of('minecraft:water')])
        ]
    )
    .transitionalItem('kubejs:incomplete_biochemical_sculptor')
    .loops(20)
    e.recipes.create.mixing(Fluid.of('kubejs:nitric_acid',250),[Fluid.of('kubejs:nitrogen_gas'),Fluid.of('minecraft:water',250),'kubejs:iron_plate']).superheated()
    e.recipes.create.mixing([Fluid.of('minecraft:water'),'20x kubejs:non-fissile_uranium'],['15x kubejs:uranium_waste','10x kubejs:silica',Fluid.of('kubejs:nitric_acid'),Fluid.of('kubejs:sulfuric_acid')]).superheated()
    e.recipes.create.mixing([Fluid.of('kubejs:sulfuric_acid',500),'5x kubejs:encased_uranium_cell'],[Fluid.of('kubejs:sulfuric_acid'),'10x kubejs:uranium','3x kubejs:concrete']).superheated()
    e.recipes.create.mixing('kubejs:cooling_system',[Fluid.of('kubejs:nitrogen_gas'),Fluid.of('minecraft:water',200),'2x kubejs:heat_sink','2x kubejs:rubber']).superheated()
    e.recipes.create.mixing([Fluid.of('minecraft:water'),'kubejs:battery'],[Fluid.of('kubejs:sulfuric_acid',900),Fluid.of('kubejs:alumina_solution',600),'kubejs:aluminum_casing']).superheated()
    e.recipes.create.mixing('kubejs:fused_modular_frame',[Fluid.of('kubejs:nitrogen_gas'),'kubejs:heavy_modular_frame','50x kubejs:aluminum_casing']).superheated()

//Particle Accelerator
//Done in Datapack
})
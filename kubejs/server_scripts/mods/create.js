
onEvent('recipes', e => {
	// Remove redstone links due to chunk lightning bugs
	e.remove({ output: 'create:linked_controller' })
	e.remove({ output: 'create:redstone_link' })

	e.remove({ output: 'create:mechanical_drill' })
	e.shaped('create:mechanical_drill', [
		' D ',
		'AIA',
		' C '
	], {
		D: 'kubejs:andesite_drill',
		A: 'create:andesite_alloy',
		I: Ingots.iron,
		C: 'create:andesite_casing'
	})

	// Change output count of giant wheels
	e.remove({ output: 'create:crushing_wheel' })
	Create.makeMechanical(e, [
		' AAA ',
		'AAPAA',
		'APSPA',
		'AAPAA',
		' AAA '
	], {
		A: 'create:andesite_alloy',
		P: '#minecraft:planks',
		S: '#c:stone'
	}, 'create:crushing_wheel')

	e.remove({ output: 'create:mechanical_pump' })
	e.shapeless('create:mechanical_pump', ['create:cogwheel', 'create:fluid_pipe', 'modern_industrialization:copper_rotor'])

	e.remove({ output: 'create:fluid_tank' })
	e.shaped('create:fluid_tank', [
		'PPP',
		'PGP',
		'PPP'
	], {
		P: Plates.copper,
		G: '#c:glass'
	})
})

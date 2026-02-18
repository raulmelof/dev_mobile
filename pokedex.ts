interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

async function buscarPokemon(): Promise<void> {
  try {
    const nomeOuId = process.argv[2];

    if (!nomeOuId) {
      console.log('⚠️  Por favor, digite o nome ou ID do Pokémon.');
      console.log('Exemplo: npx ts-node pokedex.ts charizard');
      return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        console.error('❌ Pokémon não encontrado!');
        return;
      }
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = (await response.json()) as PokemonData;

    const nomeFormatado = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    
    const alturaMetros = data.height / 10;
    
    const pesoKg = data.weight / 10;

    const tipos = data.types.map((t) => t.type.name).join(', ');

    console.log(`\n⚡ Pokedéx Info:`);
    console.log(`${nomeFormatado} – ${alturaMetros} m – ${pesoKg} kg – ${tipos}`);
    console.log('-----------------------------------------');

  } catch {
    console.error('⚠️ Erro de rede. Tente novamente.');
  }
}

buscarPokemon();
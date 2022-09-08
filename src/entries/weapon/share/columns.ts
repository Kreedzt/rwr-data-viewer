import { GridColDef } from '@mui/x-data-grid';
import translation from './translation.json';

type TranslationKey = keyof typeof translation;

const getTranslation = (k: TranslationKey | string) => {
    if (k in translation) {
        return translation[k as TranslationKey];
    }

    return k;
};

const getBaseCol = (key: TranslationKey | string): GridColDef => {
    return {
        field: key,
        headerName: getTranslation(key),
        minWidth: 150,
    };
};

export const weaponColumns: GridColDef[] = [
    getBaseCol('id'),
    getBaseCol('source_file_name'),
    getBaseCol('key'),
    getBaseCol('weapon_template_file'),
    getBaseCol('radius'),
    getBaseCol('transform_on_consume'),
    getBaseCol('on_ground_up'),
    getBaseCol('hud_icon'),
    getBaseCol('tag'),
    getBaseCol('drop_count_factor_on_death'),
    getBaseCol('drop_count_factor_on_player_death'),
    getBaseCol('time_to_live_out_in_the_open'),
    getBaseCol('player_death_drop_owner_lock_time'),
    getBaseCol('quality'),
    getBaseCol('carry_in_two_hands'),
    getBaseCol('retrigger_time'),
    getBaseCol('last_burst_retrigger_time'),
    getBaseCol('accuracy_factor'),
    getBaseCol('sustained_fire_grow_step'),
    getBaseCol('sustained_fire_diminish_rate'),
    getBaseCol('magazine_size'),
    getBaseCol('can_shoot_standing'),
    getBaseCol('can_shoot_crouching'),
    getBaseCol('can_shoot_prone'),
    getBaseCol('burst_shots'),
    getBaseCol('sight_range_modifier'),
    getBaseCol('ai_sight_range_modifier'),
    getBaseCol('stab_enabled'),
    getBaseCol('stab_range'),
    getBaseCol('reload_one_at_a_time'),
    getBaseCol('suppressed'),
    getBaseCol('name'),
    getBaseCol('class'),
    getBaseCol('slot'),
    getBaseCol('projectile_speed'),
    getBaseCol('projectiles_per_shot'),
    getBaseCol('spread_range'),
    getBaseCol('barrel_offset'),
    getBaseCol('sight_height_offset'),
    getBaseCol('running_accuracy'),
    getBaseCol('walking_accuracy'),
    getBaseCol('crouch_moving_accuracy'),
    getBaseCol('standing_accuracy'),
    getBaseCol('crouching_accuracy'),
    getBaseCol('prone_accuracy'),
    getBaseCol('prone_moving_accuracy'),
    getBaseCol('over_wall_accuracy'),
    getBaseCol('next_in_chain_key'),
    getBaseCol('next_in_chain_share_ammo'),
    getBaseCol('modifier_speed'),
    getBaseCol('result_hit_kill_probability'),
    getBaseCol('result_hit_kill_decay_start_time'),
    getBaseCol('result_hit_kill_decay_end_time'),
    getBaseCol('use_basic_muzzle_smoke_effect'),
    getBaseCol('spawn_instance_class'),
    getBaseCol('spawn_instance_key'),
    getBaseCol('consume'),
    getBaseCol('deployment'),
    getBaseCol('stance_accuracy_rate'),
    getBaseCol('barrel_offset_ed'),
    getBaseCol('success_probability'),
    getBaseCol('range'),
    getBaseCol('character_state'),
    getBaseCol('cover_deployment'),
    getBaseCol('affect_characters'),
    getBaseCol('affect_vehicles'),
    getBaseCol('damage'),
    getBaseCol('untransform_equipment_class'),
    getBaseCol('untransform_count'),
    getBaseCol('solt'),
    getBaseCol('barrel_offset_3d'),
    getBaseCol('cn_name'),
];

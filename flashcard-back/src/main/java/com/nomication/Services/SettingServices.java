package com.nomication.Services;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nomication.Models.Setting;
import com.nomication.repos.SettingRepo;
import com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;


@Service
public class SettingServices
{
	@Autowired
	SettingRepo settingRepo;

	public void save(Setting setting)
	{
		settingRepo.save(setting);
	}
	
	public void deleteSettingsFromDeck(int deck_id)
	{
		settingRepo.deleteDeckSettings(deck_id);
	}

	public Setting getSettingByDeckId(int deck_id)
	{
		Setting result = null;
		ArrayList<Setting> setting = settingRepo.getSettingByDeckId(deck_id);

		if (setting.size() > 0)
		{
			result = setting.get(0);
		}

		return result;
	}
}

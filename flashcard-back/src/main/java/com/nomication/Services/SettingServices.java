package com.nomication.Services;

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
	
}

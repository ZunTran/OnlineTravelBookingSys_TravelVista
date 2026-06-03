package com.qd.formatters;

import com.qd.pojo.Providers;
import java.text.ParseException;
import java.util.Locale;
import org.springframework.format.Formatter;

public class ProviderFormatter implements Formatter<Providers> {

    @Override
    public String print(Providers p, Locale locale) {
        return String.valueOf(p.getId()); 
    }

    @Override
    public Providers parse(String text, Locale locale) throws ParseException {
        Providers p = new Providers();
        p.setId(Long.valueOf(text));
        return p;
    }
}